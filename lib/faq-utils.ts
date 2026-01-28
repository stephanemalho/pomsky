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
        const answerElement = faqItem.answer as ReactElement<any>;

        if (answerElement.props && answerElement.props.children) {
            const children = answerElement.props.children;

            if (Array.isArray(children)) {
                answer = children
                    .map((child: any) => {
                        if (typeof child === "string") return child;
                        if (child && child.props && child.props.children) {
                            if (typeof child.props.children === "string")
                                return child.props.children;
                            if (Array.isArray(child.props.children)) {
                                return child.props.children.join(" ");
                            }
                        }
                        return "";
                    })
                    .filter(Boolean)
                    .join(" ");
            } else if (typeof children === "string") {
                answer = children;
            } else if (
                children &&
                typeof children === "object" &&
                "props" in children &&
                children.props &&
                children.props.children
            ) {
                if (typeof children.props.children === "string") {
                    answer = children.props.children;
                }
            }
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
