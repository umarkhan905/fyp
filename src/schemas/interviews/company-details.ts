import * as z from "zod";

const CompanyDetailsSchema = z.object({
  companyName: z.string().nonempty({ message: "Company Name is required" }),
});

type CompanyDetailsSchemaType = z.infer<typeof CompanyDetailsSchema>;

export { CompanyDetailsSchema, type CompanyDetailsSchemaType };
