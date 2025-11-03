export const BLOGS = [
    {
        id: "error-handling-rails",
        title: "Error Handling in Ruby on Rails - Modular Approach & Middleware",
        createdAt: '2025-05-03T14:30:00.000Z',
        link: "https://medium.com/@jakariajishan006/error-handling-in-ruby-on-rails-modular-approach-middleware-18d0c5d02c4a",
        skills: [
            "Ruby on Rails",
            "Error Handling",
            "Middleware",
            "ActiveSupport::Concern",
            "Rescue_from",
            "Rails Configuration",
        ],
        description: `This article explores essential error handling techniques in Ruby on Rails, covering basic exception rescuing, a modular approach using concerns for centralized error management, and implementing custom middleware for robust error processing. It includes practical code examples for controllers, concerns like RecordNotFoundRenderer and RenderError, and a custom ErrorHandle middleware integrated via config/application.rb.

Key highlights:
- Basic rescuing with begin/rescue blocks and controller-level rescue_from.
- Modular concerns for handling specific errors like ActiveRecord::RecordNotFound and generic StandardError.
- Middleware setup for catching exceptions at the request level, logging messages, and re-raising for further processing.

The post emphasizes graceful error handling to maintain application stability and provide user-friendly feedback.`,
        image: "", // No logo provided
        new: true,
    },
    {
        id: "mastering-oop-php",
        title: "Mastering OOP in PHP: Interfaces, Abstract Classes, Polymorphism, and Composition — All in One Example",
        createdAt: '2025-05-03T14:30:00.000Z',

        link: "https://medium.com/@jakariajishan006/mastering-oop-in-php-interfaces-abstract-classes-polymorphism-and-composition-all-in-one-23d2955d129a",
        skills: [
            "PHP",
            "OOP",
            "Interfaces",
            "Abstract Classes",
            "Polymorphism",
            "Composition",
            "Exception Handling",
        ],
        description: `This article demonstrates key OOP concepts in PHP through a practical payment processing example. It covers defining a Processor interface for payment contracts, an abstract OnlinePaymentProcess class for shared validation and structure, a concrete StripePayment implementation, and an OrderProcess class showcasing composition and polymorphism.

Key highlights:
- Interface enforces processPayment and refundPayment methods.
- Abstract class handles API key validation and delegates specific execution.
- Polymorphic usage allows swapping processors seamlessly.
- Includes runnable code example with output for order processing.

Suggestions for extension include adding PayPal integration, logging interfaces, and unit tests with mocks.`,
        image: "", // No logo provided
        new: true,
    },
]