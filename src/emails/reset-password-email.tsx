import { Html } from "@react-email/html";
import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";

type ResetPasswordEmailProps = {
  userName?: string;
  verificationUrl: string;
};

export function ResetPasswordEmail({
  userName = "there",
  verificationUrl,
}: ResetPasswordEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Section className="bg-gray-100 py-10 px-0 w-full">
          <Container className="bg-white rounded-xl shadow-lg mx-auto max-w-md px-8 py-10">
            <Img
              src="https://mock-byte.vercel.app/logo-primary.png"
              alt="MockByte Logo"
              width="120"
              className="mx-auto mb-6"
            />

            <Heading as="h2" className="text-xl font-bold text-center mb-4">
              Reset your password
            </Heading>

            <Text className="text-base text-gray-700 text-center mb-4">
              Hi {userName},<br />
              Click the button below to reset your password.
            </Text>

            {/* Button */}
            <div className="text-center mb-6">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Reset Password
              </Button>
            </div>

            <Text className="text-sm text-gray-500 text-center">
              If you didn’t request this, you can ignore this email.
            </Text>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
}
