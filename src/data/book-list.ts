interface Book {
    id: string
    title: string
    author?: string
    authors?: string[]
    description: string
    image: string
}

export const bookList: Book[] = [
    {
        id: 'clean-code',
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        description: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.
        Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code on the fly into a book that will instill within you the values of a software craftsman and make you a better programmer but only if you work at it.
        What kind of work will you be doing? You'll be reading code - lots of code. And you will be challenged to think about what's right about that code, and what's wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft.
        Clean Code is divided into three parts. `,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg'
    },
    {
        id: 'design-patterns',
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        authors: ['Erich Gamma', 'Grady Booch', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
        description: `Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.`,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348027904i/85009.jpg'
    },
    {
        id: 'c-lang',
        title: 'The C Programming Language',
        authors: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
        description: `This book is meant to help the reader learn how to program in C. It is the definitive reference guide, now in a second edition. Although the first edition was written in 1978, it continues to be a worldwide best-seller. This second edition brings the classic original up to date to include the ANSI standard. From the Preface: We have tried to retain the brevity of the first edition. C is not a big language, and it is not well served by a big book. We have improved the exposition of critical features, such as pointers, that are central to C programming. We have refined the original examples, and have added new examples in several chapters. For instance, the treatment of complicated declarations is augmented by programs that convert declarations into words and vice versa. As before, all examples have been tested directly from the text, which is in machine-readable form.
        As we said in the first preface to the first edition, C "wears well as one's experience with it grows." With a decade more experience, we still feel that way. We hope that this book will help you to learn C and use it well.`,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391032531i/515601.jpg'
    },
    {
        id: 'javascript-good-parts',
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        description: `Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts , Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts , you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.`,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg'
    },
    {
        id: 'pragmatic-programmer',
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        authors: ['Andy Hunt', 'Dave Thomas'],
        description: `Straight from the programming trenches, The Pragmatic Programmer cuts through the increasing specialization and technicalities of modern software development to examine the core process--taking a requirement and producing working, maintainable code that delights its users. It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse. Read this book, and you'll learn how to Fight software rot; Avoid the trap of duplicating knowledge; Write flexible, dynamic, and adaptable code; Avoid programming by coincidence; Bullet-proof your code with contracts, assertions, and exceptions; Capture real requirements; Test ruthlessly and effectively; Delight your users; Build teams of pragmatic programmers; and Make your developments more precise with automation. Written as a series of self-contained sections and filled with entertaining anecdotes, thoughtful examples, and interesting analogies, The Pragmatic Programmer illustrates the best practices and major pitfalls of many different aspects of software development. Whether you're a new coder, an experienced programmer, or a manager responsible for software projects, use these lessons daily, and you'll quickly see improvements in personal productivity, accuracy, and job satisfaction. You'll learn skills and develop habits and attitudes that form the foundation for long-term success in your career. You'll become a Pragmatic Programmer.`,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg'
    },
    {
        id: 'clean-architecture',
        title: 'Clean Architecture',
        author: 'Robert C. Martin',
        description: `Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. "Uncle Bob" Martin shows how to bring greater professionalism and discipline to application architecture and design.
        As with his other books, Martin's Clean Architecture doesn't merely present multiple choices and options, and say "use your best judgment": it tells you what choices to make, and why those choices are critical to your success. Martin offers direct, no-nonsense answers to key architecture and design questions like: What are the best high level structures for different kinds of applications, including web, database, thick-client, console, and embedded apps? What are the core principles of software architecture? What is the role of the architect, and what is he/she really trying to achieve? What are the core principles of software design? How do designs and architectures go wrong, and what can you do about it? What are the disciplines and practices of professional architects and designers? Clean Architecture is essential reading for every software architect, systems analyst, system designer, and software manager — and for any programmer who aspires to these roles or is impacted by their work.`,
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1471680093i/18043011.jpg'
    }
]