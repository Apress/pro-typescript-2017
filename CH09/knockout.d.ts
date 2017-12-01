interface KnockoutApplyBindings {
    (viewModel: {}, rootNode?: HTMLElement): void;
}

interface Knockout {
    applyBindings: KnockoutApplyBindings;
    computed: (evaluator: () => any) => any;
    observable: (value: any) => any;
    observableArray: (value: any[]) => any;
}

declare var ko: Knockout;