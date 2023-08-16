const quoteContainer = document.getElementById('quote-container');
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const newQuoteBtn = document.getElementById('new-quote-btn');

        async function fetchRandomQuote() {
            try {
                const response = await fetch('https://type.fit/api/quotes');
                const data = await response.json();
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];
                
                quoteText.textContent = randomQuote.text;
                quoteAuthor.textContent = randomQuote.author || 'Unknown';

            } catch (error) {
                quoteText.textContent = 'An error occurred while fetching the quote.';
                console.error('Error fetching quote:', error);
            }
        }

        newQuoteBtn.addEventListener('click', fetchRandomQuote);

        // Initial fetch
        fetchRandomQuote();