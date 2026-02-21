// Utilitaires pour extraire le contenu texte des FAQ
import type { ReactElement } from "react";
import type { FAQItem } from "@/components/faq";

/**
 * Extrait le texte brut d'un élément React FAQ answer
 * Utile pour générer les schémas JSON-LD sans duplication de code
 */
export function extractTextFromFAQ(faqItem: FAQItem): {
    question: string;
    answer: string;
} {
    const question = faqItem.question;

    // Extraire le texte de l'answer (qui est un ReactElement)
    let answer = "";

    if (typeof faqItem.answer === "string") {
        answer = faqItem.answer;
    } else {
        // L'answer est un ReactElement, on extrait le texte des paragraphes
        const answerElement = faqItem.answer as ReactElement<{
            children?: unknown;
        }>;

        const asString = (value: unknown): string => {
            if (typeof value === "string") return value;
            if (Array.isArray(value)) {
                return value.map((item) => asString(item)).filter(Boolean).join(" ");
            }
            if (
                value &&
                typeof value === "object" &&
                "props" in value &&
                value.props &&
                typeof value.props === "object" &&
                "children" in value.props
            ) {
                return asString(
                    (value.props as { children?: unknown }).children
                );
            }
            return "";
        };

        if (answerElement.props && answerElement.props.children) {
            const children = answerElement.props.children;
            answer = asString(children);
        }
    }

    return { question, answer: answer.trim() };
}

/**
 * Convertit un tableau de FAQItem en format pour JSON-LD
 */
export function convertFAQsToSchema(
    faqs: FAQItem[]
): Array<{ question: string; answer: string }> {
    return faqs.map((faq) => extractTextFromFAQ(faq));
}
