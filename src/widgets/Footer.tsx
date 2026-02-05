import { Container } from "@/shared/ui/Container";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black py-12 text-sm">
            <Container className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="inline-block">
                        <img
                            src="/assets/Logo/SteramVox_logo.jpg"
                            alt="StreamVox Logo"
                            className="h-10 w-auto rounded-xl"
                        />
                    </Link>
                    <p className="text-text-muted">
                        The next-generation real-time AI translator for Windows.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Product</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Download</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Connect</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><a href="mailto:support@streamvox.pro" className="hover:text-white transition-colors">Support</a></li>
                        <li><a href="https://twitter.com/alekgir" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                    </ul>
                </div>
            </Container>

            <Container className="mt-12 pt-8 border-t border-white/5 text-center text-text-muted">
                <p>© {currentYear} AlekGir. All rights reserved.</p>
            </Container>
        </footer>
    );
}
