import {createContext, useEffect, useState} from "react";

export const QuizDataContext = createContext({
    quizData: {}
})

export const QuizDataContextProvider = ({children}) => {
    const [quizData, setQuizData] = useState({});

    useEffect(() => {
        let questions = {
            numOfQuestions: 10,
            questions: [
                {
                    question: "Який із стейблкоінів алгоритмічний?",
                    image: "0.png",
                    answers: [
                        {
                            answer: "USDT",
                            isTrue: false
                        },
                        {
                            answer: "USDC",
                            isTrue: false
                        },
                        {
                            answer: "DAI",
                            isTrue: true
                        },
                        {
                            answer: "BUSD",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Який із стейблкоінів заскамився в 2022?",
                    image: "1.png",
                    answers: [
                        {
                            answer: "USDT",
                            isTrue: true
                        },
                        {
                            answer: "UST",
                            isTrue: true
                        },
                        {
                            answer: "DAI",
                            isTrue: false
                        },
                        {
                            answer: "BUSD",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Хто найбільше маніпулює криптою у Twitter?",
                    image: "2.png",
                    answers: [
                        {
                            answer: "Білл Гейтс",
                            isTrue: false
                        },
                        {
                            answer: "Марк Цукерберг",
                            isTrue: false
                        },
                        {
                            answer: "Ілон Маск",
                            isTrue: true
                        },
                        {
                            answer: "Леонардо Ді Капріо",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Основа екосистеми DeFi на цей момент є:",
                    image: "3.png",
                    answers: [
                        {
                            answer: "Etherum",
                            isTrue: true
                        },
                        {
                            answer: "Solana",
                            isTrue: false
                        },
                        {
                            answer: "Terra",
                            isTrue: false
                        },
                        {
                            answer: "Polygon",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Стандарт NFT токена вперше зʼявився у такому році:",
                    image: "4.png",
                    answers: [
                        {
                            answer: "2014",
                            isTrue: false
                        },
                        {
                            answer: "2017",
                            isTrue: true
                        },
                        {
                            answer: "2020",
                            isTrue: false
                        },
                        {
                            answer: "2021",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Який блокчейн проводить аукціони для підключення до своєї мережі?",
                    image: "5.png",
                    answers: [
                        {
                            answer: "Solana",
                            isTrue: false
                        },
                        {
                            answer: "Cosmos",
                            isTrue: false
                        },
                        {
                            answer: "Etherum",
                            isTrue: false
                        },
                        {
                            answer: "Polkadot",
                            isTrue: true
                        }
                    ]
                },
                {
                    question: "Мережею Proof-of-Work є:",
                    image: "6.png",
                    answers: [
                        {
                            answer: "Cosmos",
                            isTrue: false
                        },
                        {
                            answer: "Solana",
                            isTrue: false
                        },
                        {
                            answer: "Polygon",
                            isTrue: false
                        },
                        {
                            answer: "Litecoin",
                            isTrue: true
                        }
                    ]
                },
                {
                    question: "Мережею Proof-of-Stake є:",
                    image: "7.png",
                    answers: [
                        {
                            answer: "Etherum Classic",
                            isTrue: false
                        },
                        {
                            answer: "Dogecoin",
                            isTrue: false
                        },
                        {
                            answer: "Cardano",
                            isTrue: true
                        },
                        {
                            answer: "Bitcoin",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Який стандарт Ethereum дозволяє створювати нові токени?",
                    image: "8.png",
                    answers: [
                        {
                            answer: "ERC-721",
                            isTrue: false
                        },
                        {
                            answer: "ERC-20",
                            isTrue: true
                        },
                        {
                            answer: "TRC-20",
                            isTrue: false
                        },
                        {
                            answer: "BEP20",
                            isTrue: false
                        }
                    ]
                },
                {
                    question: "Яке рішення дозволяє прискорювати виконання транзакцій в blockchain?",
                    image: "9.png",
                    answers: [
                        {
                            answer: "Layer 0",
                            isTrue: false
                        },
                        {
                            answer: "Layer 1",
                            isTrue: false
                        },
                        {
                            answer: "Layer 2",
                            isTrue: true
                        },
                        {
                            answer: "Layer 3",
                            isTrue: false
                        }
                    ]
                }
            ]


        }

        setQuizData(questions)
    }, [])

    const value = {quizData: quizData};

    return (
        <QuizDataContext.Provider value={value}>
            {children}
        </QuizDataContext.Provider>);

}

