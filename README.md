# PlantApp

## 🪴 About The Project

PlantApp is a mobile application built with React Native designed to help users identify plants, get detailed information about them, and manage their plant care. The app aims to provide a user-friendly interface for plant enthusiasts of all levels.

### Key Features (Implemented & Planned)

*   **Plant Identification:** (Planned - core feature)
*   **Onboarding Flow:** Guides new users through the app's initial setup.
*   **Premium Subscription Paywall:** Offers access to exclusive features.
*   **Home Page:** Displays plant categories, articles/questions, and a premium features banner.
*   **Tab Navigation:** Easy access to different sections of the app (Home, Scan, Diagnose, My Garden, Profile).
*   **API Integration:** Fetches plant categories and questions from a backend.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (>= 18.x recommended)
*   Yarn or npm
*   Watchman (for macOS users)
*   Xcode (for iOS development)
*   Android Studio (for Android development)
*   Ruby and Bundler (for iOS CocoaPods)

Make sure you have completed the [React Native development environment setup](https://reactnative.dev/docs/environment-setup) for your specific OS.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Yunus5112/PlantApp.git
    cd PlantApp
    ```

2.  **Install JavaScript dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Install iOS dependencies (CocoaPods):**
    ```bash
    cd ios
    pod install
    cd ..
    ```
    *(Note: If it's the first time or you have issues with `pod install`, you might need to run `bundle install` and then `bundle exec pod install` in the `ios` directory).*

### Running the Application

1.  **Start the Metro Bundler:**
    Open a terminal window in the project root and run:
    ```bash
    npm start
    # OR
    yarn start
    ```

2.  **Run on a Simulator/Emulator or Device:**
    Open another terminal window in the project root.

    *   **For iOS:**
        ```bash
        npm run ios
        # OR
        yarn ios
        ```
        *(If you encounter issues, try opening the `.xcworkspace` file in the `ios` directory with Xcode and building/running from there.)*

    *   **For Android:**
        ```bash
        npm run android
        # OR
        yarn android
        ```
        *(If you encounter issues, ensure you have an Android Virtual Device (AVD) set up in Android Studio or a physical device connected and recognized.)*

---

## 🛠️ Built With

*   **[React Native](https://reactnative.dev/)** - The framework used for building native mobile apps.
*   **[TypeScript](https://www.typescriptlang.org/)** - For static typing and improved developer experience.
*   **[React Navigation](https://reactnavigation.org/)** - For handling routing and navigation (Stack & Bottom Tabs).
*   **[Redux Toolkit](https://redux-toolkit.js.org/)** (with `react-redux`) - For state management.
*   **[React Native SVG](https://github.com/react-native-svg/react-native-svg)** - For using SVG images.
*   **[React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)** - For gradient backgrounds.
*   ESLint & Prettier - For code linting and formatting.

---

## 📂 Project Structure

The project follows a standard React Native structure with key source files located in the `src/` directory:

src/
├── assets/         # Images, SVGs, fonts
│   ├── icon/
│   └── svg/
├── components/     # Reusable UI components
│   ├── buttons/
│   └── cards/
├── constants/      # App-wide constants (e.g., text literals)
├── navigation/     # Navigation setup (if you extract it from App.tsx)
├── redux/          # Redux store, slices, actions
│   └── slices/
├── screens/        # Top-level screen components
├── types/          # TypeScript type definitions
└── utils/          # Utility functions (e.g., scaling)
App.tsx             # Root application component
custom.d.ts         # Custom type declarations (e.g., for SVG imports)

---
## ✨ Features & Screenshots

**Example:**

**Get Started Screen**

**Onboarding Flow**

**Paywall Screen**


## 📧 Contact

E-mail: yunussolak5112@gmail.com
