import techVentLogo from '@/assets/TechVent/logo.jpg'
import techVentCover from '@/assets/TechVent/cover.jpg'
import techVentStory1 from '@/assets/TechVent/TechVent 1.jpeg'
import techVentStory2 from '@/assets/TechVent/TechVent 2.jpeg'
import techVentStory3 from '@/assets/TechVent/TechVent 3.jpeg'
import impactConnectLogo from '@/assets/ImpactConnect/logo.jpg'
import impactConnectCover from '@/assets/ImpactConnect/cover.jpg'
import impactConnectStory1 from '@/assets/ImpactConnect/ImpactConnect 1.jpeg'
import impactConnectStory2 from '@/assets/ImpactConnect/ImpactConnect 2.jpeg'
import impactConnectStory3 from '@/assets/ImpactConnect/ImpactConnect 3.jpeg'
import ecoCraftLogo from '@/assets/EcoCraft/logo.jpg'
import ecoCraftCover from '@/assets/EcoCraft/cover.jpg'
import ecoCraftStory1 from '@/assets/EcoCraft/EcoCraft 1.jpg'
import ecoCraftStory2 from '@/assets/EcoCraft/EcoCraft 2.jpeg'
import ecoCraftStory3 from '@/assets/EcoCraft/EcoCraft 3.jpeg'
import { ecoCraft, impactConnect, momo, techVent } from './users'

export const startups = [
    {
        'logo': techVentLogo,
        'cover': techVentCover,
        'title': 'TechVent Solutions',
        'shortDisc': 'TechVent Solutions is a cutting-edge technology company',
        'disc': 'TechVent Solutions is a cutting-edge technology company specializing in AI-driven projects. Alex Techton, the CEO, has a proven track record of successful ventures in the tech industry. TechVent is seeking funding to scale its latest project, an innovative AI platform revolutionizing data analysis.',
        'goal': 1200000,
        'funded': 500000,
        'backers': 30,
        'deadline': '2024-04-30',
        'stories': [
            {
                'cover': techVentStory1,
                'title': 'Tech-Driven Beginnings',
                'disc': "Olivia's story began with a simple yet powerful idea — that technology should not only simplify but transform lives. Thus, TechVent emerged as a tech haven, providing cutting-edge solutions and pushing the boundaries of what's possible."
            },
            {
                'cover': techVentStory2,
                'title': 'Beyond Gadgets',
                'disc': "Our products aren't just gadgets; they're catalysts for change. Each creation embodies a commitment to pushing the tech envelope, fostering creativity, and building a community dedicated to the future of innovation."
            },
            {
                'cover': techVentStory3,
                'title': 'Crafting the Future',
                'disc': "Join us on this journey towards a world where every tech innovation contributes to a brighter tomorrow. Together, we can craft a future that seamlessly integrates technology into our lives — one TechVent at a time."
            },
        ],
        'comments': [
            {
                'user': momo,
                'comment': "I'm investing in this product looks amazing",
                'replies': [
                    {
                        'user': techVent,
                        'comment': "thank you we'll keep improving"
                    }
                ]
            }
        ]
    },
    {
        'logo': impactConnectLogo,
        'cover': impactConnectCover,
        'title': 'ImpactConnect',
        'shortDisc': 'ImpactConnect Foundation is a non-profit organization',
        'disc': 'ImpactConnect Foundation is a non-profit organization founded by Maya Changemaker, a dedicated social activist. The foundation is focused on community empowerment initiatives. Maya is seeking funding to expand their current programs and make a more significant impact on communities in need.',
        'goal': 2000000,
        'funded': 1500000,
        'backers': 30,
        'deadline': '2024-04-30',
        'stories': [
            {
                'cover': impactConnectStory1,
                'title': '',
                'disc': ''
            },
            {
                'cover': impactConnectStory2,
                'title': '',
                'disc': ''
            },
            {
                'cover': impactConnectStory3,
                'title': '',
                'disc': ''
            },
        ],
        'comments': [
            {
                'user': momo,
                'comment': "I'm investing in this product looks amazing",
                'likes': '5',
                'replies': [
                    {
                        'user': impactConnect,
                        'comment': "thank you we'll keep improving",
                        'likes': '5',
                    },
                    {
                        'user': momo,
                        'comment': 'keep it up',
                        'likes': '5',
                    }
                ]
            },
            {
                'user': momo,
                'comment': "I'm investing in this product looks amazing",
                'likes': '5',
                'replies': [
                    {
                        'user': impactConnect,
                        'comment': "thank you we'll keep improving",
                        'likes': '5',
                    },
                    {
                        'user': momo,
                        'comment': 'keep it up',
                        'likes': '5',
                    }
                ]
            },
        ]

    },
    {
        'logo': ecoCraftLogo,
        'cover': ecoCraftCover,
        'title': 'EcoCraft Co.',
        'shortDisc': 'EcoCraft Co. is an e-commerce company dedicated to sustainable products.',
        'disc': 'EcoCraft Co. is an e-commerce company dedicated to sustainable products. Ryan Retailer, the founder, has built a successful business around environmentally friendly goods. EcoCraft is seeking funding to scale its operations, improve supply chain sustainability, and expand its product line.',
        'goal': 1200000,
        'funded': 2000000,
        'backers': 30,
        'deadline': '2024-04-30',
        'stories': [
            {
                'cover': ecoCraftStory1,
                'title': 'Roots of Passion',
                'disc': 'In the heart of our journey is a passion for a greener future. EcoCraft Co. was born from the vision of Ryan Retailer, a dedicated entrepreneur committed to reshaping commerce into a force for good.'
            },
            {
                'cover': ecoCraftStory2,
                'title': 'Sustainable Beginnings',
                'disc': "Ryan's story began with a simple belief — that sustainable living should be accessible to all. Fueled by this conviction, EcoCraft Co. emerged as an e-commerce haven for conscientious consumers, offering a curated collection of environmentally friendly products."
            },
            {
                'cover': ecoCraftStory3,
                'title': 'More Than Products',
                'disc': "From humble beginnings, our commitment to sustainability has driven every decision. We've built a thriving business, but we're not stopping there. We are on a mission to scale our operations, refining our supply chain to set new standards for eco-conscious commerce."
            },
        ],
        'comments': [
            {
                'user': momo,
                'comment': "I'm investing in this product looks amazing",
                'likes': '5',
                'replies': [
                    {
                        'user': ecoCraft,
                        'comment': "thank you we'll keep improving",
                        'likes': '5',
                    }
                ]
            }
        ]
    },
]