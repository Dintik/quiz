# Quiz Application

A modern quiz application built with Next.js 15, React 19, and TypeScript. This application provides an interactive quiz experience with internationalization support and smooth animations. Users can take quizzes while selecting their preferred language for the interface.

Live demo: [quiz-theta-mauve.vercel.app](https://quiz-theta-mauve.vercel.app)

## 🚀 Features

- **Modern Stack**: Built with Next.js 15 and React 19
- **Type Safety**: Full TypeScript support (65.2% TypeScript)
- **Internationalization**:
  - Multi-language support using next-intl
  - Available languages: English, French, German, Spanish
  - Dynamic language switching
- **Interactive Quiz System**:
  - Step-by-step quiz progression
  - Progress tracking (e.g., 1/5)
  - Multiple choice questions
  - Responsive option selection
  - Animated loading transitions between quiz completion and results
- **Smooth Animations**:
  - Powered by Framer Motion
  - Custom animated loader with progress indication
  - Animated text transitions
- **Responsive Design**: Mobile-first approach
- **Form Validation**: Using Joi for robust data validation
- **Modern Styling**: SASS modules for component-based styling (33.5% SCSS)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Dintik/quiz.git
cd quiz
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```env
# Data source configuration: 'local' (default) or 'rest'
NEXT_PUBLIC_DATA_SOURCE=local

# API URL for 'rest' data source (required if NEXT_PUBLIC_DATA_SOURCE=rest)
NEXT_PUBLIC_API_URL=http://your-api-url
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Usage

1. **Starting a Quiz**:

   - Navigate to the home page
   - Click on the quiz you want to take
   - The quiz will start automatically

2. **Language Selection**:

   - Use the language selector in the navigation
   - Choose from available languages (EN, FR, DE, ES)
   - Interface will update immediately

3. **Taking the Quiz**:

   - Read each question carefully
   - Select your answer from the available options
   - Progress is shown at the top (e.g., Question 1 of 5)
   - Use navigation buttons to move between questions

4. **Completing the Quiz**:
   - Answer all questions to complete the quiz
   - View your results at the end
   - Option to retake or try different quizzes

## 📁 Project Structure

```
quiz/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # Reusable React components
│   ├── hooks/        # Custom React hooks and state management
│   ├── services/     # Business logic services
│   ├── types/        # TypeScript types/interfaces
│   ├── i18n/         # Internationalization files
│   ├── data/         # Static data/configurations
│   └── assets/       # Media files and resources
├── public/           # Static files
└── messages/         # Translation messages
```

## 🧪 Code Quality

The project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Husky for Git hooks
  - Pre-commit hooks:
    - Format check with Prettier
    - Lint check with ESLint
- Lint-staged for running checks only on changed files

### Pre-commit Workflow

When you try to create a commit, the following checks will run automatically:

1. **Format and Lint** (only on staged files):
   - `.js`, `.jsx`, `.ts`, `.tsx`: Prettier formatting and ESLint fixes
   - `.json`, `.md`: Prettier formatting

The commit will only proceed if all checks pass.

## 🌐 Browser Support

The application supports:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Documentation

For more detailed documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- [Dintik](https://github.com/Dintik) - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- All contributors who have helped this project grow
