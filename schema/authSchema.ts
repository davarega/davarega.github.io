import * as z from "zod";

export const RegisterSchema = z
    .object({
        username: z.string().min(3, {
            message: "Username must be at least 3 characters long",
        }),
        emailAddress: z.string().email({
            message: "Please enter a valid email address",
        }),
        password: z.string().min(6, {
            message: "Password must be at least 6 characters long",
        }),
        passwordConfirm: z.string().min(6, {
            message: "Password must be at least 6 characters long",
        }),
        termes: z.boolean().default(false),
    })
    .refine(
        (data) => {
            return data.password === data.passwordConfirm;
        },
        {
            message: "Passwords do not match",
            path: ["passwordConfirm"],
        }
    )
    .refine(
        (data) => {
            return data.termes === true;
        },
        {
            message: "Please agree to the termes of service",
            path: ["termes"],
        }
    );

export const LoginSchema = z.object({
    emailAddress: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
    rememberMe: z.boolean().default(false).optional(),
});
