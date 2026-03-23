import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { useTranslations } from "@/i18n/utils"
import { useToast } from "@/providers/Toast/toast.provider"
import { createContactSchema } from "@/schemes/contact.scheme"
import type { ContactFormData } from "@/schemes/contact.scheme"
import { useSendEmail } from "@/services/contact/contact.service.hook"
import { DEFAULT_LOCALE } from "@/utils/locale.utils"
import Button from "../Button/Button"
import Input from "../Input/Input"
import { getStatus } from "./ContactForm.helpers"
import type { ContactFormProps, Status } from "./ContactForm.types"

import ConffetiIcon from "@/assets/svg/confetti.svg?react"
import ErrorIcon from "@/assets/svg/error.svg?react"
import SendIcon from "@/assets/svg/send.svg?react"
import Textarea from "../Textarea/Textarea"

const ContactForm = ({ locale = DEFAULT_LOCALE }: ContactFormProps) => {
	const t = useTranslations(locale)
	const sendEmailMutation = useSendEmail()
	const { showToast } = useToast()

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
		const payload = {
			...data,
			locale,
		}

		try {
			setStatus("pending")
			sendEmailMutation.mutate(payload, {
				onError: (error) => {
					console.error("[Error sending email]", { error })

					showToast({
						header: t("contact.toastTitle"),
						body: t("contact.status.error"),
						icon: <ErrorIcon className="h-4 w-4" />,
					})
				},
				onSuccess: () => {
					form.reset()
					showToast({
						header: t("contact.toastTitle"),
						body: t("contact.status.success"),
						icon: <ConffetiIcon className="h-4 w-4" />,
					})
				},
				onSettled: () => {
					setStatus("idle")
				},
			})
		} catch (error) {
			console.error("[Unexpected error]", { error })

			setStatus("idle")
			showToast({
				header: t("contact.toastTitle"),
				body: t("contact.status.error"),
			})
		}
	}

	const onError = (errors: Record<string, unknown>) => {
		console.log("[Form errors]", { errors })
	}

	return (
		<div className="bg-white p-6 sm:p-12.25 rounded-3xl sm:rounded-[48px] w-full">
			<form
				className="flex flex-col gap-2"
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
							autoComplete="on"
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
							autoComplete="on"
						/>
					)}
				/>
				<Controller
					name="message"
					control={form.control}
					render={({ field }) => (
						<Textarea
							label={t("contact.inputMessageLabel")}
							{...field}
							error={form.formState.errors.message?.message}
							placeholder={t("contact.inputMessagePlaceholder")}
							rows={4}
							autoComplete="on"
							textareaClassName="resize-none"
						/>
					)}
				/>
				<div>
					<Button
						type="submit"
						className="ml-auto w-full"
						icon={<SendIcon className="w-5 h-5 shrink-0" />}
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
