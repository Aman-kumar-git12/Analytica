import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Set style
sns.set_theme(style="whitegrid", palette="muted")
plt.rcParams['figure.figsize'] = (16, 10)
plt.rcParams['font.family'] = 'sans-serif'

# Load data
df = pd.read_csv('datasets/bank_loan.csv')

# Create a dashboard-like figure with 4 subplots
fig, axes = plt.subplots(2, 2, figsize=(20, 14))
fig.suptitle('Bank Loan Portfolio Analysis - Executive Dashboard', fontsize=24, fontweight='bold', y=0.95)

# 1. Loan Amount Distribution by Term
sns.histplot(data=df, x='Current Loan Amount', hue='Term', kde=True, ax=axes[0, 0], palette='viridis', multiple='stack')
axes[0, 0].set_title('Loan Amount Distribution by Term', fontsize=16)
axes[0, 0].set_xlabel('Amount ($)', fontsize=12)

# 2. Credit Score vs Annual Income
sns.scatterplot(data=df.sample(min(len(df), 1000)), x='Credit Score', y='Annual Income', hue='Home Ownership', alpha=0.6, ax=axes[0, 1])
axes[0, 1].set_title('Credit Score vs Annual Income (Sampled)', fontsize=16)
axes[0, 1].set_yscale('log')

# 3. Purpose of Loan - Count Plot
sns.countplot(data=df, y='Purpose', order=df['Purpose'].value_counts().index[:10], ax=axes[1, 0], palette='magma')
axes[1, 0].set_title('Top 10 Loan Purposes', fontsize=16)

# 4. Monthly Debt vs Credit Score
sns.regplot(data=df.sample(min(len(df), 500)), x='Credit Score', y='Monthly Debt', scatter_kws={'alpha':0.3}, line_kws={'color':'red'}, ax=axes[1, 1])
axes[1, 1].set_title('Credit Score Correlation with Monthly Debt', fontsize=16)

plt.tight_layout(rect=[0, 0.03, 1, 0.95])

# Save images
os.makedirs('public/bank_loan', exist_ok=True)
plt.savefig('public/bank_loan/analysis_dashboard.png', dpi=150, bbox_inches='tight')
plt.savefig('public/bank_loan/image2.png', dpi=100, bbox_inches='tight')

# Individual plots for gallery
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='Home Ownership', y='Credit Score', palette='Set2')
plt.title('Credit Score Distribution by Home Ownership')
plt.savefig('public/bank_loan/image3.png', dpi=100, bbox_inches='tight')

print("Bank Loan analysis images generated successfully.")
