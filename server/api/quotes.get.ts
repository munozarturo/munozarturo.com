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
        {
            quote: "The world is full of people who are grabbing and self-seeking. So the rare individual who unselfishly tries to serve others has an enormous advantage.",
            credit: "Dale Carnegie",
            footnote: "",
        },
        {
            quote: "It is the individual who is not interested in his fellow men who has the greatest difficulties in life and provides the greatest injury to others.",
            credit: "Alfred Adler",
            footnote: "",
        },
        {
            quote: "Smile.",
            credit: "",
            footnote: "",
        },
        {
            quote: "Every man I meet is my superior in some way, and in that I learn from him.",
            credit: "Ralph Waldo Emerson",
            footnote: "",
        },
        {
            quote: "Give a dog a bad name and you may as well hang him.",
            credit: "",
            footnote:
                "i.e. a person will live up to the reputation they are given.",
        },
        {
            quote: "The man who has done his best has done everything.",
            credit: "Charles Schwab",
            footnote: "",
        },
    ];

    return quotes;
});
