import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projectData = [
  {
    title: "Glucose Guardian",
    desc: "Predicting diabetes risk using regression & visualization on healthcare datasets.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/diabetes_prediction_analysis"
  },
  {
    title: "Brick by Brick",
    desc: "Machine learning models predicting real estate prices based on features & location.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/realestate_price_prediction"
  },
  {
    title: "Stay or Leave?",
    desc: "Churn prediction for telecom using classification models & addressing class imbalance.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/telecom_customer_churn_prediction"
  },
  {
    title: "Popcorn Picks",
    desc: "Hybrid recommendation engine combining collaborative and content-based filtering for movies.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/movie_recommendation_systems"
  },
  {
    title: "ALS Segments",
    desc: "KMeans clustering & PCA to segment ALS patients into meaningful groups for insights.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/als_segments_clustering"
  },
  {
    title: "Retail Radar",
    desc: "Time series forecasting on U.S. retail sales using Prophet and linear regression.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/us_retail_sales_forecasting"
  },
  {
    title: "Review Rater",
    desc: "Sentiment analysis on movie reviews using Logistic Regression and XGBoost.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/sentiment_analysis_movie_reviews"
  },
  {
    title: "Digit Detective",
    desc: "CNN for handwritten digit classification on MNIST dataset with high accuracy.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/mnist_digit_classification"
  },
  {
    title: "LendSense",
    desc: "Loan disbursal risk prediction using classification models to support approvals.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/loan_disbursal_risk_prediction"
  },
  {
    title: "Diabetes Analyzer in R",
    desc: "Analyzed diabetes risk patterns across datasets using R and visualizations.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/diabetes_analyzer_in_R"
  },
  {
    title: "AirAware",
    desc: "Air quality health impact classification using LightGBM, XGBoost & Random Forest.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/airquality_health_impact_classification"
  },
  {
    title: "Driven to Predict",
    desc: "Car insurance claim prediction with ensemble techniques like XGBoost & LightGBM.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/car_insurance_claim_prediction"
  },
  {
    title: "Fake or Fact?",
    desc: "Automated fake news detection using TF-IDF, ML classifiers, and BiLSTM deep learning.",
    link: "https://github.com/sriharshabsprasad/data-science-portfolio/tree/main/fake_news_detection"
  }
]

const Projects = () => (
  <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">✨ Featured Projects</h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((p, i) => (
        <motion.div
          key={i}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{p.desc}</p>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaGithub /> View Code
          </a>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Projects
