export default defineEventHandler(async (event) => {
    const quotes: { quote: string; credit: string; footnote: string }[] = [
        {
            quote: "Smart people learn from the mistakes of others, dumb people learn from their own, and morons don't learn at all.",
            credit: "Alexey's Father",
            footnote: "",
        },
        {
            quote: "It will always be fine in the end, and if it's not fine, it's not the end.",
            credit: "Robin Gray",
            footnote:
                "“However, if it's the end and it's not fine. It doesn't really matter all that much, because it's over.” — The way I like to think about it.",
        },
        {
            quote: "The harder I work the luckier I get.",
            credit: "Bob Pavey",
            footnote: "",
        },
        {
            quote: "You can have it all, but you can't have it all at the same time.",
            credit: "Jamie Dimon",
            footnote: "",
        },
        {
            quote: "It's hard to hate someone up close.",
            credit: "Brian Chesky",
            footnote: "",
        },
        {
            quote: "We're all living life for the first time.",
            credit: "Atreya",
            footnote: "",
        },
    ];

    return quotes;
});
