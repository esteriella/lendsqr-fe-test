// Interface for bank information of a user
export interface BankInformation {
    uniqueId: string;       // Unique identifier for the bank account
    accountNumber: string;  // Bank account number
    accountName: string;    // Name associated with the bank account
    accountBalance: string; // Current balance of the bank account
    bankName: string;       // Name of the bank
};

// Interface for personal information of a user
export interface PersonalInformation {
    name: string;           // Full name of the user
    avatar: string;         // URL to the user's avatar image
    gender: string;         // Gender of the user
    bvn: string;            // Bank Verification Number (BVN)
    maritalStatus: string;  // Marital status of the user
    children: string;       // Number of children the user has
    residenceType: string;  // Type of residence the user lives in
};

// Interface for education and employment details of a user
export interface EducationAndEmployment {
    educationLevel: string;     // Highest education level achieved by the user
    employmentStatus: string;   // Current employment status of the user
    jobSector: string;          // Job sector the user is employed in
    employmentDuration: string; // Duration of the current employment
    workEmail: string;          // Work email address of the user
    monthlyIncome: string[];    // Array of monthly income figures
    loanRepayment: string;      // Monthly loan repayment amount
};

// Interface for social media handles of a user
export interface Socials {
    twitter: string;    // Twitter handle of the user
    facebook: string;   // Facebook username of the user
    instagram: string;  // Instagram username of the user
};

// Interface for guarantor details of a user
export interface Guarantor {
    fullName: string;       // Full name of the guarantor
    phoneNumber: string;    // Phone number of the guarantor
    email: string;          // Email address of the guarantor
    relationship: string;   // Relationship of the guarantor to the user
};

// Interface representing a user
export interface UserInterface {
    id: string;                                     // Unique identifier for the user
    dateJoined: string;                             // Date when the user joined
    userName: string;                               // Username of the user
    companyName: string;                            // Company name associated with the user
    email: string;                                  // Email address of the user
    phoneNumber: string;                            // Phone number of the user
    status: string;                                 // Status of the user (e.g., Active, Blacklisted, Pending, or Inactive)
    bankInformation: BankInformation;               // Bank information of the user
    personalInformation: PersonalInformation;       // Personal information of the user
    educationAndEmployment: EducationAndEmployment; // Education and employment details of the user
    socials: Socials;                               // Social media handles of the user
    guarantor: Guarantor;                           // Guarantor details of the user
};

// Interface representing a user in list
export interface UserList {
    id: string;                                     // Unique identifier for the user
    dateJoined: string;                             // Date when the user joined
    userName: string;                               // Username of the user
    companyName: string;                            // Company name associated with the user
    email: string;                                  // Email address of the user
    phoneNumber: string;                            // Phone number of the user
    status: string;                                 // Status of the user (e.g., Active, Blacklisted, Pending, or Inactive)
};

// Interface representing statistical data for a dashboard or feature
export interface StatInterface {
    id: number;         // Unique identifier for the statistical data entry
    feature: string;    // Name or description of the feature being represented
    icon: string;       // URL for an icon representing the feature
    total: string;      // Total count or value associated with the feature
    bgColor: string;    // Background color for the feature card
};

// Interface representing a table header
export interface ListHeadInfertace {
    id: number;         // Unique identifier for the table header
    title: string;      // Title of the table header
};

// Interface representing a list menu item
export interface ListMenuInterface {
    id: number;     // Unique identifier for the list menu item
    icon: string;   // URL for an icon representing the menu item
    name: string;   // Name or description of the menu item
};

// Interface representing a user menu item
export interface UserMenu {
    id: number;         // Unique identifier for the menu item
    menuItem: string;   // Name or description of the menu item
};