import { Container } from "@/shared/ui/Container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black py-12 text-sm">
            <Container className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/assets/Logo/SteramVox_logo.jpg"
                            alt="StreamVox Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto rounded-xl"
                        />
                    </Link>
                    <p className="text-text-muted">
                        {t("description")}
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t("product")}</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><Link href="#features" className="hover:text-white transition-colors">{t("features")}</Link></li>
                        <li><a href="https://apps.microsoft.com/detail/9NC10103JH7L" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t("download")}</a></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
                        <li><Link href="/docs" className="hover:text-white transition-colors">{t("documentation")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t("legal")}</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><Link href="/privacy" className="hover:text-white transition-colors">{t("privacyPolicy")}</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">{t("termsOfService")}</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-white transition-colors">{t("refundPolicy")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">{t("connect")}</h4>
                    <ul className="space-y-2 text-text-muted">
                        <li><a href="mailto:hello@alekgir.com" className="hover:text-white transition-colors">{t("support")}</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61586199129069" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                    </ul>
                </div>
            </Container>

            <Container className="mt-12 pt-8 border-t border-white/5 text-center text-text-muted">
                <p>© {currentYear} {t("rights")}</p>
            </Container>
        </footer>
    );
}
