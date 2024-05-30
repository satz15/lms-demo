// PDFGenerator.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    marginBottom: 50,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    paddingTop: 10,
    borderTop: "1pt solid #666",
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
  },
});

// Header component
const Header = () => (
  <View style={styles.header}>
    <Text>Header - Your Company Name</Text>
  </View>
);

// Footer component
const Footer = ({ pageNumber }) => (
  <View style={styles.footer}>
    <Text>Footer - Page {pageNumber}</Text>
  </View>
);

// PDFGenerator component
const PDFGenerator = () => {
  const pages = [1, 2, 3]; // Example: Define the number of pages dynamically

  return (
    <Document>
      {pages.map((pageNumber) => (
        <Page key={pageNumber} size="A4" style={styles.page}>
          <Header />
          <View style={styles.content}>
            <Text>
            HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It’s a combination of Hypertext, which defines the link between web pages, and Markup language, which is used to define the text document within tags to structure web pages. This language is used to annotate text so that machines can understand and manipulate it accordingly. HTML is human-readable and uses tags to define what manipulation has to be done on the text. This guide will help you understand the workings of HTML and explain it with examples.
              {/* Add your content here */}
            </Text>
          </View>
          <Footer pageNumber={pageNumber} />
        </Page>
      ))}
    </Document>
  );
};

export default PDFGenerator;