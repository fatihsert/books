import { Book } from '../models/book.model';

const BooksSource: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Classic',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KerXVCkzeTRWH77hTmfoHcdUjjGYiRAXg&usqp=CAU',
    description:
      'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is a classic of modern American literature and widely read in high schools and colleges.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KerXVCkzeTRWH77hTmfoHcdUjjGYiRAXg&usqp=CAU',
    description:
      "1984 is a dystopian novel by George Orwell published in 1949. It presents a totalitarian society where the government controls every aspect of its citizens' lives.",
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KerXVCkzeTRWH77hTmfoHcdUjjGYiRAXg&usqp=CAU',
    description:
      'The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. It explores themes of wealth, love, and the American Dream in the Roaring Twenties.',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: 'Classic',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KerXVCkzeTRWH77hTmfoHcdUjjGYiRAXg&usqp=CAU',
    description:
      'Pride and Prejudice is a novel by Jane Austen published in 1813. It follows the story of Elizabeth Bennet as she deals with issues of manners, upbringing, morality, and marriage.',
  },
  {
    id: 5,
    title: 'To the Lighthouse',
    author: 'Virginia Woolf',
    category: 'Modernist',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7KerXVCkzeTRWH77hTmfoHcdUjjGYiRAXg&usqp=CAU',
    description:
      'To the Lighthouse is a novel by Virginia Woolf published in 1927. It is known for its stream-of-consciousness narrative style and explores themes of perception and subjective reality.',
  }
];

export default BooksSource;
