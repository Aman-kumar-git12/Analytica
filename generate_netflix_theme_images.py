import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Netflix Premium Aesthetic Constants
NETFLIX_RED = '#E50914'
DARK_BG = '#141414'
TEXT_GRAY = '#E5E5E5'

# Set premium dark style
plt.rcParams.update({
    'figure.facecolor': DARK_BG,
    'axes.facecolor': DARK_BG,
    'axes.edgecolor': '#333333',
    'axes.labelcolor': TEXT_GRAY,
    'xtick.color': TEXT_GRAY,
    'ytick.color': TEXT_GRAY,
    'text.color': TEXT_GRAY,
    'font.family': 'sans-serif',
    'grid.color': '#333333'
})
sns.set_theme(style="dark", palette=[NETFLIX_RED, '#564d4d'])

# Load data
df = pd.read_csv('datasets/netflix_churn.csv')

# Ensure directory exists
os.makedirs('public/netflix', exist_ok=True)

# 1. Retention Pulse Pie
fig, ax = plt.subplots(figsize=(10, 8))
data = df['churned'].value_counts()
ax.pie(data, labels=['Active', 'Churned'], autopct='%1.1f%%', 
       startangle=90, colors=['#221f1f', NETFLIX_RED], 
       explode=(0, 0.1), wedgeprops={'edgecolor': '#444444', 'linewidth': 2})
plt.title('Subscription Retention Pulse', fontsize=20, color=NETFLIX_RED, fontweight='black')
plt.savefig('public/netflix/image1.png', dpi=120, bbox_inches='tight')

# 2. Age vs Tier Violin
plt.figure(figsize=(12, 7))
sns.violinplot(data=df, x='subscription_type', y='age', hue='churned', 
               split=True, inner="quart", palette={0: '#221f1f', 1: NETFLIX_RED})
plt.title('Demographic Depth: Age vs Tier Loyalty', fontsize=18, color=NETFLIX_RED)
plt.savefig('public/netflix/image2.png', dpi=120, bbox_inches='tight')

# 3. Genre Engagement Boxen
plt.figure(figsize=(12, 7))
sns.boxenplot(data=df, x='favorite_genre', y='watch_hours', hue='churned', 
              palette={0: '#444444', 1: NETFLIX_RED})
plt.title('Genre Engagement Velocity', fontsize=18, color=NETFLIX_RED)
plt.xticks(rotation=45)
plt.savefig('public/netflix/image3.png', dpi=120, bbox_inches='tight')

# 4. Payment Friction Horizontal Bar
pm_churn = pd.crosstab(df['payment_method'], df['churned'], normalize='index') * 100
pm_churn.plot(kind='barh', stacked=True, color=['#221f1f', NETFLIX_RED], figsize=(12, 7), edgecolor='#333333')
plt.title('Churn Risk by Payment Architecture', fontsize=18, color=NETFLIX_RED)
plt.legend(['Retained', 'Churned'], bbox_to_anchor=(1, 1))
plt.savefig('public/netflix/image4.png', dpi=120, bbox_inches='tight')

# 5. Regional Volatility Scatter
plt.figure(figsize=(12, 7))
region_metrics = df.groupby('region').agg({'churned': 'mean', 'watch_hours': 'mean'}).reset_index()
sns.scatterplot(data=region_metrics, x='watch_hours', y='churned', 
                size='churned', sizes=(100, 1000), hue='region', palette='rocket', alpha=0.8)
plt.title('Global Market Volatility Map', fontsize=18, color=NETFLIX_RED)
plt.savefig('public/netflix/image5.png', dpi=120, bbox_inches='tight')

print("All 5 Netflix Red/Black themed images generated successfully.")
