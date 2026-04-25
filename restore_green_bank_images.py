import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

# Emerald Green Theme Constants
BANK_GREEN = '#00c853'
PURE_BLACK = '#0d1117'

# Set premium dark style
plt.style.use('dark_background')
plt.rcParams.update({
    'axes.facecolor': PURE_BLACK,
    'figure.facecolor': PURE_BLACK,
    'grid.color': '#222222',
    'text.color': '#c9d1d9',
    'axes.labelcolor': '#c9d1d9',
    'xtick.color': '#c9d1d9',
    'ytick.color': '#c9d1d9',
    'font.family': 'sans-serif'
})

# Load data
df = pd.read_csv('datasets/bank_loan.csv')

# Ensure directory exists
os.makedirs('public/bank_loan', exist_ok=True)

# 1. Credit Score Distribution
plt.figure(figsize=(10, 8))
sns.histplot(df['Credit Score'].dropna(), bins=50, color=BANK_GREEN, kde=True)
plt.title('Credit Health Analysis', fontsize=20, color=BANK_GREEN, fontweight='bold')
plt.savefig('public/bank_loan/image1.png', dpi=120, bbox_inches='tight')

# 2. Term Pie
plt.figure(figsize=(10, 8))
df['Term'].value_counts().plot(kind='pie', autopct='%1.1f%%', colors=['#1b5e20', BANK_GREEN], explode=(0.05, 0), shadow=True)
plt.title('Loan Term Split', fontsize=18, color=BANK_GREEN)
plt.ylabel('')
plt.savefig('public/bank_loan/image2.png', dpi=120, bbox_inches='tight')

# 3. Income Scatter
plt.figure(figsize=(12, 7))
sns.scatterplot(data=df.sample(1000), x='Annual Income', y='Current Loan Amount', color=BANK_GREEN, alpha=0.5)
plt.title('Income vs Requested Capital', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image3.png', dpi=120, bbox_inches='tight')

# 4. Housing Bar
plt.figure(figsize=(12, 7))
sns.barplot(data=df, x='Home Ownership', y='Credit Score', color=BANK_GREEN, ci=None)
plt.title('Credit Score by Housing', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image4.png', dpi=120, bbox_inches='tight')

# 5. Correlation Heatmap
plt.figure(figsize=(12, 10))
numeric_df = df.select_dtypes(include=[np.number])
sns.heatmap(numeric_df.corr(), annot=True, cmap='Greens', fmt=".2f", linewidths=0.5)
plt.title('Financial Feature Correlations', fontsize=18, color=BANK_GREEN)
plt.savefig('public/bank_loan/image5.png', dpi=120, bbox_inches='tight')

print("Bank Loan 'Restored' Emerald Green images generated successfully.")
