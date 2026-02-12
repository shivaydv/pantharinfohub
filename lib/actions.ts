"use server"
import nodemailer from "nodemailer"
import { parseServerResponse } from './utils';

export async function carrerApplicationForm(formData: FormData) {
    try {
        const fields = {
            user_name: formData.get('user_name') as string,
            user_mail: formData.get('user_mail') as string,
            user_phone: formData.get('user_phone') as string,
            user_linkedin: formData.get('user_linkedin') as string,
            user_github: formData.get('user_github') as string,
            user_resume: formData.get('user_resume') as string,
            role: formData.get('role') as string
        };

        console.log("Application received for role:", fields.role);
        console.log("Candidate details:", fields);

        // Connect Email Service
        // Send email with the Drive link provided in fields.user_resume
        const mailSent = await applicationMail(fields, fields.user_resume);

        if (mailSent) {
            return parseServerResponse({ status: 'SUCCESS', message: 'Application Submitted Successfully' })
        } else {
            return parseServerResponse({ status: 'FAIL', message: 'Failed to submit application. Please try again later.' })
        }
    } catch (error) {
        console.error('Submission failed:', error);
        return parseServerResponse({ status: 'FAIL', message: 'Unknown Error Occured' })
    }
}

export async function contactFormAction(formData: FormData) {
    try {
        const fields = {
            user_name: formData.get('user_name') as string,
            user_mail: formData.get('user_mail') as string,
            budget: formData.get('budget') as string,
            services: formData.get('services') as string,
            message: formData.get('message') as string,
        };

        console.log("Contact Request received:", fields);

        const mailSent = await contactMail(fields);

        if (mailSent) {
            return parseServerResponse({ status: 'SUCCESS', message: 'Message Sent Successfully' })
        } else {
            return parseServerResponse({ status: 'FAIL', message: 'Failed to send message. Please try again later.' })
        }
    } catch (error) {
        console.error('Contact submission failed:', error);
        return parseServerResponse({ status: 'FAIL', message: 'Unknown Error Occured' })
    }
}

const contactMail = async (fields: any) => {
    try {
        const { user_name, user_mail, budget, services, message } = fields;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlBody = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #f97316;">New Contact Inquiry</h2>
                <p><strong>Name:</strong> ${user_name}</p>
                <p><strong>Email:</strong> ${user_mail}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Services:</strong> ${services}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        </body>
        </html>
        `;

        const confirmationHtml = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; text-align: center;">
                <h2 style="color: #f97316;">Thanks for reaching out, ${user_name}!</h2>
                <p>We've received your inquiry regarding <strong>${services}</strong>.</p>
                <p>Our team will review your requirements and get back to you within 24-48 hours.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #666;">Panthar InfoHub - Scaling Engineering Excellence</p>
            </div>
        </body>
        </html>
        `;

        // Send to self
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Project Inquiry from ${user_name}`,
            html: htmlBody
        });

        // Send confirmation to client
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user_mail,
            subject: `We've received your request - Panthar InfoHub`,
            html: confirmationHtml
        });

        return true;
    } catch (error) {
        console.error("Mailing error:", error);
        return false;
    }
}

const applicationMail = async (fields: any, resumeUrl: string) => {
    try {
        const { user_name, user_mail, user_phone, user_linkedin, user_github, role } = fields;
        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlBody = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Job Application</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        background: #ffffff;
                        margin: 20px auto;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background: #0073e6;
                        color: #ffffff;
                        text-align: center;
                        padding: 20px;
                        border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 22px;
                    }
                    .content {
                        padding: 20px;
                        color: #333333;
                    }
                    .details {
                        background: #f9f9f9;
                        padding: 15px;
                        border-radius: 6px;
                        margin-top: 10px;
                    }
                    .details p {
                        margin: 5px 0;
                    }
                    .footer {
                        text-align: center;
                        padding: 15px;
                        font-size: 14px;
                        color: #666666;
                        background: #f4f4f4;
                        border-radius: 0 0 8px 8px;
                    }
                    .footer a {
                        color: #0073e6;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>

            <div class="container">
                <div class="header">
                    <h1>New Job Application Received</h1>
                </div>

                <div class="content">
                    <p><strong>Dear Hiring Team,</strong></p>
                    <p>A new candidate has applied for a job position. Here are the details:</p>

                    <div class="details">
                        <p><strong>Name:</strong> ${user_name}</p>
                        <p><strong>Email:</strong> ${user_mail}</p>
                        <p><strong>Phone:</strong> ${user_phone}</p>
                        <p><strong>LinkedIn:</strong> <a href="${user_linkedin}" target="_blank"> ${user_linkedin} </a></p>
                        <p><strong>GitHub:</strong> <a href="${user_github}" target="_blank"> ${user_github} </a></p>
                        <p><strong>Resume:</strong> <a href="${resumeUrl}" target="_blank">Download Resume</a></p>
                    </div>

                    <p>Please review the application and reach out to the candidate if suitable.</p>
                </div>

                <div class="footer">
                    <p>Best Regards, <br> Your Company HR Team</p>
                    <p><a href="https://pantharinfohub.com/">Panthar InfoHub</a></p>
                </div>
            </div>

            </body>
            </html>
        `;

        const candidateHtmlBody = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Application Received</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        background: #ffffff;
                        margin: 20px auto;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background: #0073e6;
                        color: #ffffff;
                        text-align: center;
                        padding: 20px;
                        border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 22px;
                    }
                    .content {
                        padding: 20px;
                        color: #333333;
                        text-align: center;
                    }
                    .footer {
                        text-align: center;
                        padding: 15px;
                        font-size: 14px;
                        color: #666666;
                        background: #f4f4f4;
                        border-radius: 0 0 8px 8px;
                    }
                    .footer a {
                        color: #0073e6;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>

            <div class="container">
                <div class="header">
                    <h1>Thank You for Your Application!</h1>
                </div>

                <div class="content">
                    <p><strong>Dear ${user_name},</strong></p>
                    <p>Thank you for applying for the <strong>${role}</strong> role at our company.</p>
                    <p>We appreciate your interest and will review your application soon. If your profile matches our requirements, we will get in touch with you.</p>
                    <p>Meanwhile, if you have any questions, feel free to reach out to us.</p>
                    <p><strong>Best of luck!</strong></p>
                </div>

                <div class="footer">
                    <p>Best Regards, <br> HR Team</p>
                    <p><a href="https://pantharinfohub.com/">Panthar InfoHub</a></p>
                </div>
            </div>
            </body>
            </html>
        `
        // Email to Self
        const mailToSelf = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Career Application - ${role} `,
            html: htmlBody
        };
        // Email to Candidate
        const mailToCandidate = {
            from: process.env.EMAIL_USER,
            to: user_mail,
            subject: `Panthar InfoHub ${role} - Application `,
            html: candidateHtmlBody
        };

        await transporter.sendMail(mailToSelf);
        await transporter.sendMail(mailToCandidate);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}