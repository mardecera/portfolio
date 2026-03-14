import ConffetiIcon from "@/assets/svg/confetti.svg?react"
import SendIcon from "@/assets/svg/send.svg?react"
import { useTranslations } from "@/i18n/utils"
import { createContactSchema } from "@/schemes/contact.scheme"
import type { ContactFormData } from "@/schemes/contact.scheme"
import { useSendEmail } from "@/services/contact/contact.service.hook"
import { DEFAULT_LOCALE } from "@/utils/locale.utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Button from "../Button/Button"
import Input from "../Input/Input"
import { getStatus } from "./ContactForm.helpers"
import type { ContactFormProps, Status } from "./ContactForm.types"

const IconStatus = ({ status }: { status: Status }) => (
	<>
		{status === "idle" ? (
			<SendIcon className="w-5 h-5 shrink-0" />
		) : (
			<ConffetiIcon className="w-5 h-5 shrink-0" />
		)}
	</>
)

const ContactForm = ({ locale = DEFAULT_LOCALE }: ContactFormProps) => {
	const t = useTranslations(locale)
	const sendEmailMutation = useSendEmail()

	const [status, setStatus] = useState<Status>("idle")

	const statusMessage = useMemo(() => getStatus(status, t), [status, t])

	const form = useForm<ContactFormData>({
		resolver: zodResolver(createContactSchema(t)),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	})

	const { handleSubmit } = form

	const onSubmit = (data: ContactFormData) => {
		console.log(data)

		try {
			setStatus("pending")
			sendEmailMutation.mutate(data, {
				onError: (error) => {
					console.error("[Error sending email]", { error })
					setStatus("error")
				},
				onSuccess: () => {
					setStatus("success")
					form.reset()
				},
				onSettled: () => {
					setTimeout(() => {
						setStatus("idle")
					}, 3000)
				},
			})
		} catch (error) {
			console.error("[Unexpected error]", { error })
		}
	}

	const onError = (errors: Record<string, unknown>) => {
		console.log("[Form errors]", { errors })
	}

	return (
		<div className="bg-white p-6 rounded-xl">
			<form
				className="flex flex-col gap-1"
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<Controller
					name="name"
					control={form.control}
					render={({ field }) => (
						<Input
							label={t("contact.inputNameLabel")}
							{...field}
							error={form.formState.errors.name?.message}
							placeholder={t("contact.inputNamePlaceholder")}
						/>
					)}
				/>
				<Controller
					name="email"
					control={form.control}
					render={({ field }) => (
						<Input
							label={t("contact.inputEmailLabel")}
							type="email"
							{...field}
							error={form.formState.errors.email?.message}
							placeholder={t("contact.inputEmailPlaceholder")}
						/>
					)}
				/>
				<Controller
					name="message"
					control={form.control}
					render={({ field }) => (
						<Input
							label={t("contact.inputMessageLabel")}
							{...field}
							error={form.formState.errors.message?.message}
							placeholder={t("contact.inputMessagePlaceholder")}
						/>
					)}
				/>
				<div>
					<Button
						type="submit"
						className="ml-auto"
						icon={<IconStatus status={status} />}
						iconPosition="right"
						isLoading={sendEmailMutation.isPending}
						isDisabled={sendEmailMutation.isPending}
					>
						{statusMessage}
					</Button>
				</div>
			</form>
		</div>
	)
}

ContactForm.displayName = "ContactForm"

export default ContactForm
