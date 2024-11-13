import fs from "node:fs";


let articleAIMessage, articleText

//Obiekt ze wszystkimi promptami użytkownika

const promtps = {
    readArticle: "Use proper HTML tags in the article provided below. You should also include img tags with src 'image_placeholder.jpg', set their alt that includes a proposition on the image that will be generated (a prompt for the AI), and create some titles below the images. I personally think the images should be placed below the article's main title, and another one just under 'Wyzwania etyczne i społeczne'. Could include a few more. Return the ready HTML code. The article is as follows: "
}

//Obiekt ze wszystkimi promptami systemowymi

const systemPrompts = {
    readArticle: "You are tasked with generating HTML code. Given a text for the article, you have to wrap it in proper HTML tags, and provide some img tags with prompt-like alts that will serve as a guide for an AI model to generate givem images. You have to only return the content that will be put in the <body>, but exclude the <body> tag itself. Also, don't wrap it ine code block with '```html', etc. Just plain HTML."
}


//zadanie piewrsze


const firstArticleGeneration = async () => {

    //odczytanie pliku article.txt za pomocą fs

    try{
        articleText = fs.readFileSync("./article.txt", "utf8")
    }catch(err){
        console.error("Please provide an article in a text file named 'article.txt'")
        return
    }


    //fetch request do API OpenAI. Rola systemowa zaleca wygenerowanie czystego HTML bez podpisów.

    const generatedArticle = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer MIEJSCE_NA_KLUCZ_OPENAI`
        },
        body: JSON.stringify({
            "model": "gpt-4o-mini",
            "messages": [
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": systemPrompts.readArticle
                        }
                    ]
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": `${promtps.readArticle} ${articleText}`
                        }
                    ]
                }
            ]
        })
    })
    

    if(!generatedArticle.ok){
        console.error("there was an error generating the article" + generatedArticle.status)
    }

    articleAIMessage = await generatedArticle.json()


    if (!articleAIMessage.choices) {
        console.error("There was an error generating the article")
        return
    }


    //Po przejściu error handlingu można rozpocząć zapisywanie do pliku

    const artcileContent = articleAIMessage.choices[0].message.content

    fs.writeFile("./artykul.html", artcileContent, err => {
        if (err) {
            console.error("The was a file writing error: ", err);
            return
        }
    })


}


firstArticleGeneration()

