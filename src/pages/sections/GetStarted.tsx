import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">UINative</h1>
      <p className="text-lg mb-10 leading-relaxed text-gray-600">
        UINative is an open-source collection of React Native UI elements. Built
        with simplicity in mind, it allows you to{" "}
        <span className="font-semibold">copy, paste, and customize</span>
        components in your project with ease.
      </p>

      {/* Why UINative */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Why UINative?</h2>
        <p className="text-gray-700 leading-relaxed">
          Most UI libraries lock you into predefined styles or APIs. UINative
          takes a different approach — it gives you the actual code. Every
          element is just a React Native component with{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
            StyleSheet
          </code>
          , so you can change, extend, or rebuild it however you like.
        </p>
      </section>

      {/* Core Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Core Principles</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Open Source:</strong> Free and community-driven.
          </li>
          <li>
            <strong>Copy–Paste Ready:</strong> Use elements instantly in your
            app.
          </li>
          <li>
            <strong>Customizable:</strong> Full control via{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
              StyleSheet
            </code>
            .
          </li>
          <li>
            <strong>All Elements:</strong> From buttons and inputs to modals and
            loaders.
          </li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
        <p className="text-gray-700 leading-relaxed">
          Browse the documentation, copy any component snippet, and paste it
          into your project. Adjust styles or logic as needed — the code is 100%
          yours to modify.
        </p>
      </section>

      {/* Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          {`// Example: Button
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Press Me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});`}
        </pre>
      </section>
    </div>
  );
};

export default GetStarted;
