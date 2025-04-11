import type { Metadata } from 'next';
import './globals.css';
import { Poppins as font } from 'next/font/google';

const Font = font({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Theme Converter',
	description:
		'A simple tool to convert DaisyUI theme variables into a format compatible with Shadcn/UI design tokens. Customize your theme visually and apply it seamlessly in your project.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${Font.className} `}>{children}</body>
		</html>
	);
}
