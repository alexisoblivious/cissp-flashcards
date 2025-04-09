const domains = [
  {
    name: 'Domain 1: Security and Risk Management',
    color: '#c1dff6',
    cards: [
      { question: 'CIA triad', answer: 'Confidentiality, Integrity, and Availability; a model designed to guide policies for information security.' },
      { question: 'Threat', answer: 'A potential negative action or event enabled by a vulnerability, resulting in unwanted impact to a system or application' },
      { question: 'Vulnerability', answer: 'Flaws that weaken the overall security of a system' },
      { question: 'Asset', answer: 'Any data, device or component of an environment that supports information related activities (includes Information assets, software assets, physical assets, services and people)' },
      { question: 'SLA', answer: 'Service Level Agreement - formal document that defines the level of service expected from a provider (scope, quality and responnsibilities). A service contract' },
      { question: 'Accountability', answer: 'The principle that ensures that individuals are held responsible for hteir actions pertaining to security of information and IT assets' },
      { question: 'Non-Repudiation', answer: 'Preventing individuals from denying their actions' },
      { question: 'Risk Options', answer: 'Avoid, transfer, accept, reduce (mitigate)' },
      { question: 'Exposure', answer: 'being susceptible to harm from threats. How an asset/resource/system is open to damage or loss in the event of a security breach or incident' },
      { question: 'Impact', answer: 'cyber attack method involving manipulating people from within an organization into revealing confidential information, granting unauthorized access or performing actions to compromise security.' },
      { question: 'Social Engineering', answer: 'cyber attack method involving manipulating people from within an organization into revealing confidential information, granting unauthorized access or performing actions to compromise security.' },
      { question: 'SCRM', answer: 'Supply Chain Risk Management - focuses on identifying, assessing and mitigating risks associated with an organization\'s supply chain' }      
    ],
  },
  {
    name: 'Domain 2: Asset Security',
    color: '#c1c4f6',
    cards: [
      { question: 'Data Security Controls', answer: 'measures/mechanisms put in place to safeguard data and ensure confidentiality, availability and integrity of data' },
      { question: 'Scoping', answer: 'defining and categorizing the assets that need protection' },
      { question: 'Retention Policy', answer: 'policy / guideline that dictate how long an organization should hold onto information assets before they are securely disposed of' },
      { question: 'Data Remnants', answer: 'bits of data leftover on storage devices after trying to delete/erase it' },
      { question: 'Classification and Categorization', answer: 'Classification - assigning data a sensitivity (confidentiality) level for security and management; Categorization - grouping data based on nature, source or use ' },
      { question: 'Tailoring', answer: 'creating customized security policies, controls, frameworks to suit the specific needs of an organization' },
      { question: 'Recovery', answer: 'What processes are involved in restoring systems, data and operations to normal function level after a disruption' },
      { question: 'Data Lifecycle', answer: 'stages data goes through from creation to deletion. Generation - Collection - Processing - Storage - Management - Analysis - Visualization - Interpretation' },
      { question: 'Data Owner', answer: 'The person in the organization who has the most responsibility and authority for data security and management' },
      { question: 'Privacy (and protecting it)', answer: 'handling, processing and storage of data to protecting privacy' },
      { question: 'Purging', answer: 'salitizing data from physical devices in a way that makes it impossible to recover, including cryptographic erasure or overwriting, allows for reuse of the storage media' },
      { question: 'Data Destruction', answer: 'permanently removing data from storage media to where it cannot be recovered or reconstructed. This could be done by  physical destruction or degaussing, typically renders the storage media unusable' },
      { question: 'Responsibility', answer: 'assigning specific roles and duties to individuals within an organization to ensure that assets are protected throughout their lifecycle' },
      { question: 'Data Custodian', answer: 'supporting rold to data owner taksed with technical safeguarding and management of data. Handles operational responsibilities  of data storage, maintenance and protection.' }
    ],
  },
  {
    name: 'Domain 3: Security Architecture and Engineering',
    color: '#d8c1f6',
  cards: [
    { question: 'Plaintext', answer: 'any data that is not encrypted and is readable without cryptographic processing' }, 
    { question: 'Key Pair', answer: 'assymetric cryptography; pair of  linked cryptographic keys public and private)' },    
    { question: 'Frequency Analysis', answer: 'technique used to break classical cyphers (typically substitution cyphers) by studying the number of times a character is used and pattern of characters in a ciphertext' },  
    { question: 'Encoding and Encryption', answer: 'encoding: converting data from one form into another to ensure compatibility with different systems, ensure data integrity and accessibility across systems and platforms; schemes are publicly known and easily reversible. Encryption:converting data into a form that cannot be easily understood by unauthorized people for confidentiality purposes (from plaintext to ciphertext); reversible only if the correct key is known' },
    { question: 'Decoding and Decryption', answer: 'decoding: transferring encoded data back to original format for use. Decryption: converting cyphertextback into plaintext readable form, allowing users to access original data using the correct key' },    
    { question: 'Private Key and Public Key', answer: 'Asymmetric cryptography (key pair) Public Key:  disstributed (usually) via digital signatures, manageed and validated by Certificate Authorities. (used for encryption and signature validation) Private Key: must be kept secure and only accessible to the owner. (used for decryption and signing)' },  
    { question: 'Key Space', answer: 'the set of all possible keys that can be used with a cryptographic algorithm to perform encryption or decryption' },
    { question: 'Cryptography', answer: 'the practice of securing communications through the use of codes so that only the intended recipients can read and process the information' },    
    { question: 'Collision', answer: 'the event where two different inputs to a cryptographic hash function produce the same output' },  
    { question: 'CPTED', answer: 'Crime Prevention Through Environmental Design - design principles used to reduce the likelihood of crime by influencing offender decisions that precede criminal acts' },
    { question: 'Session Key', answer: 'a temporary encryption key used in cryptography for securing a communication session between two parties. This key is used for the duration of a single session and is then discarded, with a new key generated for any subsequent sessions' },    
    { question: 'In Band', answer: 'conducting management and control activities over the same network channels used for regular data traffic -  integrates both control and data planes on the same pathway' }, 
    { question: 'Out-Of-Band', answer: 'the use of a dedicated channel for managing network devices, separate from the primary network used for regular data traffic - enhances security and reliability by isolating management communications from the operational network' },     
    { question: 'Work Factor', answer: 'the amount of effort (usually measured in time and resources) required to overcome a security system - critical in assessing the strength and effectiveness of cryptographic systems, access controls, and other security measures' }     
  ],
  },
  {
    name: 'Domain 4: Communications and Network Security',
    color: '#f6c1df',
  cards: [ 
    { question: 'OSI Layers 1-7', answer: 'Physical, Data Link, Network, Transport, Session, Presentation, Application' },
    { question: 'IPv4 and IPv6', answer: 'Internet Protocol version 4. Utilizes a 32-bit address space, supporting 4.3 billion unique addresses. Prone to address exhaustion and commonly uses NAT; Internet Protocol version 6. Features a 128-bit address space for vastly increased address capacity and includes built-in security enhancements like mandatory IPSec' },   
    { question: 'ICMP', answer: 'Internet Control Message Protocol - A network layer protocol used by network devices to diagnose network communication issues through error messages and operational information.' },
    { question: 'DNS', answer: 'Domain Name System - Translates domain names to IP addresses, allowing users to access websites using familiar names instead of numeric IP addresses' },       
    { question: 'DHC', answer: 'Dynamic Host Configuration Protocol - Automatically assigns IP addresses and other network configuration parameters to devices on a network, enabling them to communicate effectively' },
    { question: 'FDDI', answer: 'Fiber Distributed Data Interface - A standard for data transmission on fiber optic lines in a local area network that can extend in range up to 200 kilometers' },  
    { question: 'ARP', answer: 'Address Resolution Protocol - A network protocol used to find a physical address (MAC address) associated with a given IPv4 address, used for routing traffic within a network.' },
    { question: 'API', answer: 'Application Programming Interface - A set of rules and specifications that software programs can follow to communicate with each other, serving as an interface between different software programs.' },   
    { question: 'Bandwidth', answer: 'Measures the maximum rate of data transfer across a given path. Higher bandwidth indicates a higher capacity for data transfer.' },
    { question: 'Bluetooth', answer: 'A wireless technology standard for exchanging data over short distances (using short-wavelength UHF radio waves) from fixed and mobile devices, creating personal area networks.' },       
    { question: 'LDAP', answer: 'Lightweight Directory Access Protocol - An application protocol used for accessing and maintaining distributed directory information services over an Internet Protocol network.' },
    { question: 'Token Ring', answer: 'A network configuration where all computers are connected in a ring or star topology and pass a token around the network to control which computer can send data.' },      
    { question: 'TCP and 3-way handshake', answer: 'Transmission Control Protocol - a core protocol of the Internet Protocol Suite that provides reliable, ordered, and error-checked delivery of a stream of data between applications; 3-way handshake is a method used in a TCP/IP network to create a connection between a client and a server, involving SYN, SYN-ACK, and ACK packets.' },
    { question: 'Media Access Control', answer: 'Part of the data link layer of networking protocols. It provides addressing and channel access control mechanisms to enable various network devices to communicate in a network.' },   
    { question: 'Frame', answer: 'A digital data transmission unit in computer networking and telecommunication. In the OSI model, frames are a function of the data link layer.' }  
    ],
  },
  {
    name: 'Domain 5: Identity and Access Management',
    color: '#f6c1c4',
  cards: [
    { question: 'Open Authorization (OAuth)', answer: 'open standard for access delegation commonly used as a way for internet users to grant websites or applications access to their information on other websites without giving them passwords' },
    { question: 'Access Control (system)', answer: 'Mechanisms that manage who can view or use resources in a computing environment, including authentication, authorization, and audit' },    
    { question: 'Privilege creep', answer: 'The gradual accumulation of access rights beyond what an individual needs to perform their duties, typically due to changes in roles without adjusting permissions' },
    { question: 'Self-service ID Management', answer: 'A system that allows users to manage their own identity, credentials, and resource access through a digital interface, reducing IT administration workload' },     
    { question: 'Access tokens', answer: 'Digital keys that are granted by a server following successful authentication, allowing the client to access specific resources' },
    { question: 'MFA vs SFA', answer: 'Multi-Factor Authentication (MFA): Requires multiple forms of evidence to verify identity, enhancing security; Single-Factor Authentication (SFA): Requires only one method to verify user identity, such as a password' },    
    { question: 'Accounting, Authentication, Auditing', answer: 'Accounting: Tracking user actions and resource usage, important for understanding and managing system usage; Authentication: Verifying a user’s identity; Auditing: Logging and reviewing activities to ensure compliance with policies and detect security incidents' },
    { question: 'IDaaS', answer: 'Identity as a Service - A cloud-based service that manages identity and access management functions for users and devices across diverse systems' },      
    { question: 'Authentication & Authorization', answer: 'Authentication: Process of verifying the identity of a user or device; Authorization: Process of verifying what specific applications, files, and data a user has access to.' },
    { question: 'Ethical Wall', answer: 'Information barriers implemented within an organization to prevent conflicts of interest and unauthorized information exchanges between different departments or individuals' },    
    { question: 'CER', answer: 'Crossover Error Rate - The point at which the rates of false rejections and false acceptances are equal in a biometric security system, used as a standard measure of the system’s accuracy.' },
    { question: 'False Acceptance Rate (FAR)', answer: 'The measure of the likelihood that a biometric security system will incorrectly accept an access attempt by an unauthorized user' },     
    { question: 'False Rejection Rate (type 1)', answer: 'The frequency with which a biometric security system incorrectly rejects an access attempt by an authorized user' },
    { question: 'Whaling Attack', answer: 'A type of phishing attack that specifically targets senior executives and other high-profile targets within businesses, often involving crafting highly personalized emails' },    
    { question: 'Logical Access Control System (LACS)', answer: 'A system of electronic protection that manages who can access computer resources, such as software, data, and network locations, based on established policies' } 
   ],
  },
];

domains.forEach((domain, domainIndex) => {
  domain.cards.forEach((card, cardIndex) => {
    card.id = `${domainIndex + 1}.${cardIndex + 1}`; // Unique identifier like 1.1, 1.2, etc.
  });
});

export default domains;
