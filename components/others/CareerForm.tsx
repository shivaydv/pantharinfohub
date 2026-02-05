"use client"

import { carrerApplicationForm } from '@/lib/actions'
import { carrerFormValidation } from '@/lib/utils'
import { useActionState, useState } from 'react'
import { toast } from 'sonner'
import { z } from "zod"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'

interface Career {
    title: string;
}

const CareerForm = ({ career }: { career: Career }) => {
    const [errors, setErrors] = useState<Record<string, string[]>>({})

    const handleSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                user_name: formData.get("user_name"),
                user_phone: formData.get("user_phone"),
                user_mail: formData.get("user_mail"),
                user_linkedin: formData.get("user_linkedin"),
                user_github: formData.get("user_github"),
                user_resume: formData.get("user_resume"),
            }
            formData.append("role", career.title)

            // Validate with Zod
            const validatedFields = await carrerFormValidation.parseAsync(formValues);

            const res = await carrerApplicationForm(formData)
            if (res.status === "SUCCESS") {
                toast.success(res.message)
                return { ...prevState, status: "SUCCESS" }
            } else {
                toast.error(res.message)
                return { ...prevState, status: "ERROR", error: res.message }
            }

        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors as Record<string, string[]>;
                setErrors(fieldErrors);
                toast.error("Please check your input and try again")
                return { ...prevState, error: "Validation Failed", status: "ERROR" }
            }
            toast.error("An unexpected error occurred")
            return {
                ...prevState,
                error: "An unexpected Error Occurred",
                status: "ERROR"
            }
        }
    }

    const [state, formAction, isPending] = useActionState(handleSubmit, { error: "", status: "INITIAL" })

    return (
        <form action={formAction} className='grid gap-6 text-slate-900 mt-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_name">Full Name</label>
                <Input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                    placeholder="Enter your full name"
                />
                {errors.user_name && <p className='text-red-500 text-xs mt-1'> {errors.user_name[0]} </p>}
            </div>

            <div className='grid sm:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_phone">Phone Number</label>
                    <Input
                        id="user_phone"
                        name="user_phone"
                        type="text"
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                        placeholder="+91 00000 00000"
                    />
                    {errors.user_phone && <p className='text-red-500 text-xs mt-1'> {errors.user_phone[0]} </p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_mail">Email Address</label>
                    <Input
                        id="user_mail"
                        name="user_mail"
                        type="email"
                        required
                        className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                        placeholder="your@email.com"
                    />
                    {errors.user_mail && <p className='text-red-500 text-xs mt-1'> {errors.user_mail[0]} </p>}
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_linkedin">LinkedIn Profile</label>
                <Input
                    id="user_linkedin"
                    name="user_linkedin"
                    type="url"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                    placeholder="https://linkedin.com/in/username"
                />
                {errors.user_linkedin && <p className='text-red-500 text-xs mt-1'> {errors.user_linkedin[0]} </p>}
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_github">GitHub Profile</label>
                <Input
                    id="user_github"
                    name="user_github"
                    type="url"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                    placeholder="https://github.com/username"
                />
                {errors.user_github && <p className='text-red-500 text-xs mt-1'> {errors.user_github[0]} </p>}
            </div>

            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold uppercase tracking-wider text-slate-500' htmlFor="user_resume">Resume Drive Link</label>
                <Input
                    id="user_resume"
                    name="user_resume"
                    type="url"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all py-6"
                    placeholder="https://drive.google.com/..."
                />
                {errors.user_resume && <p className='text-red-500 text-xs mt-1'> {errors.user_resume[0]} </p>}
            </div>

            <Button
                disabled={isPending}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-7 rounded-2xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all text-base"
                type="submit"
            >
                {isPending ? (
                    <span className="flex items-center gap-2">
                        <Loader2 className='size-5 animate-spin' /> Processing...
                    </span>
                ) : "Submit Application"}
            </Button>
        </form>
    )
}

export default CareerForm
