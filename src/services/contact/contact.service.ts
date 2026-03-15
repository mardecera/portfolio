import { buildHeaders } from "@/utils/service.utils"
import axios from "axios"
import type { EmailPayload } from "./contact.service.types"

export const sendEmail = async (payload: EmailPayload) => {
	const { data } = await axios.post("/api/contact", payload, {
		headers: buildHeaders(),
	})

	return data
}
