namespace Listing_3_14 {
    declare class jQuery {
        html(html: string): void;
    }

    declare function $(query: string): jQuery;

    $('#id').html('Hello World');
}