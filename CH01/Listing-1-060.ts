class Example {
    // This example does not list all variations...
    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: string): NodeList; // Non-specialized signature
    getElementsByTagName(name: string): NodeList { // implementation signature
        return document.getElementsByTagName(name);
    }
}