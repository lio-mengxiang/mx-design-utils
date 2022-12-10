export default function withOra(promiseFn: () => Promise<any>, { text, successText, failText, startText }: {
    text: string;
    successText: string;
    failText: string;
    startText?: string;
}): Promise<unknown>;
