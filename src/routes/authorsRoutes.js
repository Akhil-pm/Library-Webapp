const express= require("express");
const authorsRouter = express.Router();  

function routerAuthors(nav){
    var authors= [
    
        {
            name : 'Markus Zusak',
            nationaliy : 'Australian',
            desc : "Markus Zusak is the author of five books, including the international bestseller, The Book Thief , which spent more than a decade on the New York Times bestseller list, and is translated into more than forty languages – establishing Zusak as one of the most successful authors to come out of Australia.",
            img : 'MarkusZusak.jpg'
        },
        {
            name : 'Neil Gaiman',
            nationaliy : 'British',
            desc : "Neil Richard MacKinnon Gaiman is an English author of short fiction, novels, comic books, graphic novels, nonfiction, audio theatre, and films. His works include the comic book series The Sandman and novels Stardust, American Gods, Coraline, and The Graveyard Book. He has won numerous awards, including the Hugo, Nebula, and Bram Stoker awards, as well as the Newbery and Carnegie medals.",
            img : 'neil.jpeg'
        },
        {
            name : 'Dan Brown',
            nationaliy : 'American',
            desc : "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages around the world with 200 million copies in print. In 2005, Brown was named one of the 100 Most Influential People in the World by TIME Magazine.",
            img : 'dan.jpg'
        },
        {
            name : 'Erik Larson',
            nationaliy : 'American',
            desc : "Erik Larson’s latest work of narrative nonfiction is DEAD WAKE: THE LAST CROSSING OF THE LUSITANIA, which became an immediate New York Times bestseller. His saga of the Chicago World’s Fair of 1893, THE DEVIL IN THE WHITE CITY, was a finalist for the National Book Award, and won an Edgar Award for fact-crime writing, and lingered on various NYT best-seller lists for the better part of a decade. Hulu plans to adapt the book for a limited TV series, with Leonardo DiCaprio and Martin Scorsese as executive producers.",
            img : 'erik.jpg'
        },
        {
            name : 'Diane Setterfield',
            nationaliy : 'British',
            desc : "Diane Setterfield is a British author. Her bestselling novel, The Thirteenth Tale (2006) was published in 38 countries worldwide and has sold more than three million copies. It was number one in the New York Times hardback fiction list for three weeks and is enjoyed as much for being ‘a love letter to reading’ as for its mystery and style. Her second novel, Bellman & Black (2013) is a genre-defying tale of rooks and Victorian retail.",
            img : 'dane.jpg'
        },
        {
            name : 'Cormac McCarthy',
            nationaliy : 'American',
            desc : "Cormac McCarthy is an American novelist and playwright. He has written ten novels in the Southern Gothic, western, and post-apocalyptic genres and has also written plays and screenplays. He received the Pulitzer Prize in 2007 for The Road, and his 2005 novel No Country for Old Men was adapted as a 2007 film of the same name, which won four Academy Awards, including Best Picture.",
            img : 'Cormac-McCarthy.jpg'
        }
    
    ]
    authorsRouter.get("/",function(req,res){                      
    
        res.render("authors",
        {
          nav,
          title:"Authors",
          authors                      
        })
    });
    
    
    authorsRouter.get("/:id",function(req,res){                       
    const id = req.params.id;                    
        res.render("author",
        {
          nav,
          title:"Author",
          author : authors[id]                     
        })
    });

    return authorsRouter;
}



module.exports = routerAuthors;