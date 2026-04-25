import React from 'react';
import { ShoppingBag, Car, Landmark, Play } from 'lucide-react';

export const modules = [
  {
    id: 'blinkit',
    title: 'Blinkit Analysis',
    icon: <ShoppingBag size={20} />,
    desc: 'Optimizing grocery delivery operations by analyzing inventory churn, delivery lead times, and SKU popularity.',
    images: ['/blinkit/image1.png', '/blinkit/image2.png', '/blinkit/image3.png', '/blinkit/image4.png'],
    link: 'https://docs.google.com/spreadsheets/d/1Io0pxo0TJqIxs12O3CcyU1Bg4KNpm7Iy9BbnwdQz6_Q/edit?gid=0#gid=0',
    themeColor: '#ffcc00',
    glowColor: 'rgba(255, 204, 0, 0.4)',
    bgColor: 'rgba(255, 204, 0, 0.03)',
    logo: '🛍️',
    stack: ['Spreadsheet'],
    sampleData: {
      columns: ['Item Fat Content', 'Item Identifier', 'Item Type', 'Outlet Establishment Year', 'Outlet Identifier', 'Outlet Location Type', 'Outlet Size', 'Outlet Type', 'Item Visibility', 'Item Weight', 'Sales', 'Rating'],
      rows: [
        ['Regular', 'FDX32', 'Fruits and Vegetables', '2012', 'OUT049', 'Tier 1', 'Medium', 'Supermarket Type1', '0.1000135', '15.1', '145.479', '5'],
        ['Low Fat', 'NCB42', 'Health and Hygiene', '2022', 'OUT018', 'Tier 3', 'Medium', 'Supermarket Type2', '0.008596051', '11.8', '115.349', '5'],
        ['Regular', 'FDR28', 'Frozen Foods', '2016', 'OUT046', 'Tier 1', 'Small', 'Supermarket Type1', '0.025896485', '13.85', '165.021', '5'],
        ['Regular', 'FDL50', 'Canned', '2014', 'OUT013', 'Tier 3', 'High', 'Supermarket Type1', '0.042277867', '12.15', '126.505', '5'],
        ['Low Fat', 'DRI25', 'Soft Drinks', '2015', 'OUT045', 'Tier 2', 'Small', 'Supermarket Type1', '0.033970195', '19.6', '55.1614', '5']
      ]
    }
  },
  {
    id: 'uber-datasets',
    title: 'Uber Ride Analysis',
    icon: <Car size={20} />,
    desc: 'Exploring urban mobility trends, peak demand hours, and geographical trip distribution across metropolitan areas.',
    images: ['/uber/image1.png', '/uber/image2.png'],
    link: 'pending',
    themeColor: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    bgColor: 'rgba(255, 255, 255, 0.03)',
    logo: '🚗',
    stack: ['Tableau'],
    sampleData: {
      columns: ['trip_id', 'driver_id', 'rider_id', 'city', 'pickup_lat', 'pickup_lng', 'drop_lat', 'drop_lng', 'distance_km', 'fare_amount', 'status', 'payment_method', 'pickup_time', 'drop_time'],
      rows: [
        ['1', '8270', '10683', 'San Francisco', '37.170931', '-77.586479', '37.173652', '-77.619934', '2.97', '10.71', 'Completed', 'Wallet', '2023-01-01 00:00:00', '2023-01-01 00:08:54'],
        ['2', '1860', '44743', 'Boston', '38.898126', '-108.582976', '38.937463', '-108.558727', '8.43', '22.41', 'Completed', 'UPI', '2023-01-01 00:01:00', '2023-01-01 00:26:17'],
        ['3', '6390', '75839', 'San Francisco', '38.814570', '-89.942602', '38.821702', '-89.896434', '5.46', '12.91', 'Completed', 'Cash', '2023-01-01 00:02:00', '2023-01-01 00:18:22'],
        ['4', '6191', '22189', 'New York', '37.295905', '-75.328844', '37.301375', '-75.3174', '6.61', '15.7', 'Completed', 'Wallet', '2023-01-01 00:03:00', '2023-01-01 00:22:49'],
        ['5', '6734', '61104', 'Seattle', '38.972395', '-121.482912', '38.992088', '-121.467904', '10.5', '19.15', 'Completed', 'Wallet', '2023-01-01 00:04:00', '2023-01-01 00:35:30']
      ]
    }
  },
  {
    id: 'bank-loan',
    title: 'Bank Loan Analysis',
    icon: <Landmark size={20} />,
    desc: 'Predictive modeling and risk assessment for personal loans, analyzing credit scores, income levels, and delinquency history.',
    images: ['/bank_loan/image1.png', '/bank_loan/image2.png', '/bank_loan/image3.png', '/bank_loan/image4.png', '/bank_loan/image5.png'],
    link: 'https://github.com/Aman-kumar-git12/Data_Analysis-1/blob/main/notebooks/eda.ipynb',
    themeColor: '#238636',
    glowColor: 'rgba(35, 134, 54, 0.3)',
    bgColor: 'rgba(35, 134, 54, 0.03)',
    logo: '🏦',
    stack: ['Python', 'Pandas'],
    sampleData: {
      columns: ['Loan ID', 'Customer ID', 'Current Loan Amount', 'Term', 'Credit Score', 'Annual Income', 'Years in current job', 'Home Ownership', 'Purpose', 'Monthly Debt', 'Years of Credit History', 'Months since last delinquent', 'Number of Open Accounts', 'Number of Credit Problems', 'Current Credit Balance', 'Maximum Open Credit', 'Bankruptcies', 'Tax Liens'],
      rows: [
        ['f738779f...', 'ded0b3c3...', '611314.0', 'Short Term', '747.0', '2074116.0', '10.0', 'Home Mortgage', 'debt consolidation', '42000.83', '21.8', '0.0', '9.0', '0.0', '621908.0', '1058970.0', '0.0', '0.0'],
        ['6dcc0947...', '1630e6e3...', '266662.0', 'Short Term', '734.0', '1919190.0', '10.0', 'Home Mortgage', 'debt consolidation', '36624.4', '19.4', '0.0', '11.0', '0.0', '679573.0', '904442.0', '0.0', '0.0'],
        ['f7744d01...', '2c60938b...', '153494.0', 'Short Term', '709.0', '871112.0', '2.0', 'Rent', 'debt consolidation', '8391.73', '12.5', '10.0', '10.0', '0.0', '38532.0', '388036.0', '0.0', '0.0'],
        ['83721ffb...', '12116614...', '176242.0', 'Short Term', '727.0', '780083.0', '10.0', 'Rent', 'debt consolidation', '16771.87', '16.5', '27.0', '16.0', '1.0', '156940.0', '531322.0', '1.0', '0.0'],
        ['08f3789f...', '39888105...', '321992.0', 'Short Term', '744.0', '1761148.0', '10.0', 'Home Mortgage', 'debt consolidation', '39478.77', '26.0', '44.0', '14.0', '0.0', '359765.0', '468072.0', '0.0', '0.0']
      ]
    }
  },
  {
    id: 'netflix-churn',
    title: 'Netflix Churn Prediction',
    icon: <Play size={20} />,
    desc: 'Analyzing user behavior patterns, watch hours, and subscription types to predict and mitigate customer attrition.',
    images: ['/netflix/image1.png', '/netflix/image2.png', '/netflix/image3.png', '/netflix/image4.png', '/netflix/image5.png'],
    link: 'https://github.com/Aman-kumar-git12/Data_Analysis-1/blob/main/notebooks/netflix.ipynb',
    themeColor: '#e50914',
    glowColor: 'rgba(229, 9, 20, 0.3)',
    bgColor: 'rgba(229, 9, 20, 0.03)',
    logo: '🍿',
    stack: ['Python', 'Pandas'],
    sampleData: {
      columns: ['customer_id', 'age', 'gender', 'subscription_type', 'watch_hours', 'last_login_days', 'region', 'device', 'monthly_fee', 'churned', 'payment_method', 'number_of_profiles', 'avg_watch_time_per_day', 'favorite_genre'],
      rows: [
        ['a9b75100...', '51', 'Other', 'Basic', '14.73', '29', 'Africa', 'TV', '8.99', '1', 'Gift Card', '1', '0.49', 'Action'],
        ['49a5dfd9...', '47', 'Other', 'Standard', '0.7', '19', 'Europe', 'Mobile', '13.99', '1', 'Gift Card', '5', '0.03', 'Sci-Fi'],
        ['4d71f6ce...', '27', 'Female', 'Standard', '16.32', '10', 'Asia', 'TV', '13.99', '0', 'Crypto', '2', '1.48', 'Drama'],
        ['d3c72c38...', '53', 'Other', 'Premium', '4.51', '12', 'Oceania', 'TV', '17.99', '1', 'Crypto', '2', '0.35', 'Horror'],
        ['4e265c34...', '56', 'Other', 'Standard', '1.89', '13', 'Africa', 'Mobile', '13.99', '1', 'Crypto', '2', '0.13', 'Action']
      ]
    }
  }
];
