import { createSlice } from "@reduxjs/toolkit";

export default deckSlice = createSlice({
    name: 'deck',
    initialState: {
        deck: [
            {id: 1, image: './Deck Assets/fronts/clubs_ace', value: 1, colour: 'black', suit: 'clubs'},
            {id: 2, image: './Deck Assets/fronts/clubs_2', value: 2, colour: 'black', suit: 'clubs'},
            {id: 3, image: './Deck Assets/fronts/clubs_3', value: 3, colour: 'black', suit: 'clubs'},
            {id: 4, image: './Deck Assets/fronts/clubs_4', value: 4, colour: 'black', suit: 'clubs'},
            {id: 5, image: './Deck Assets/fronts/clubs_5', value: 5, colour: 'black', suit: 'clubs'},
            {id: 6, image: './Deck Assets/fronts/clubs_6', value: 6, colour: 'black', suit: 'clubs'},
            {id: 7, image: './Deck Assets/fronts/clubs_7', value: 7, colour: 'black', suit: 'clubs'},
            {id: 8, image: './Deck Assets/fronts/clubs_8', value: 8, colour: 'black', suit: 'clubs'},
            {id: 9, image: './Deck Assets/fronts/clubs_9', value: 9, colour: 'black', suit: 'clubs'},
            {id: 10, image: './Deck Assets/fronts/clubs_10', value: 10, colour: 'black', suit: 'clubs'},
            {id: 11, image: './Deck Assets/fronts/clubs_jack', value: 10, colour: 'black', suit: 'clubs'},
            {id: 12, image: './Deck Assets/fronts/clubs_queen', value: 10, colour: 'black', suit: 'clubs'},
            {id: 13, image: './Deck Assets/fronts/clubs_king', value: 10, colour: 'black', suit: 'clubs'},
            {id: 14, image: './Deck Assets/fronts/spades_ace_large_pip', value: 1, colour: 'black', suit: 'spades'},
            {id: 15, image: './Deck Assets/fronts/spades_2', value: 2, colour: 'black', suit: 'spades'},
            {id: 16, image: './Deck Assets/fronts/spades_3', value: 3, colour: 'black', suit: 'spades'},
            {id: 17, image: './Deck Assets/fronts/spades_4', value: 4, colour: 'black', suit: 'spades'},
            {id: 18, image: './Deck Assets/fronts/spades_5', value: 5, colour: 'black', suit: 'spades'},
            {id: 19, image: './Deck Assets/fronts/spades_6', value: 6, colour: 'black', suit: 'spades'},
            {id: 20, image: './Deck Assets/fronts/spades_7', value: 7, colour: 'black', suit: 'spades'},
            {id: 21, image: './Deck Assets/fronts/spades_8', value: 8, colour: 'black', suit: 'spades'},
            {id: 22, image: './Deck Assets/fronts/spades_9', value: 9, colour: 'black', suit: 'spades'},
            {id: 23, image: './Deck Assets/fronts/spades_10', value: 10, colour: 'black', suit: 'spades'},
            {id: 24, image: './Deck Assets/fronts/spades_jack', value: 10, colour: 'black', suit: 'spades'},
            {id: 25, image: './Deck Assets/fronts/spades_queen', value: 10, colour: 'black', suit: 'spades'},
            {id: 26, image: './Deck Assets/fronts/spades_king', value: 10, colour: 'black', suit: 'spades'},
            {id: 27, image: './Deck Assets/fronts/diamonds_ace', value: 1, colour: 'red', suit: 'diamonds'},
            {id: 28, image: './Deck Assets/fronts/diamonds_2', value: 2, colour: 'red', suit: 'diamonds'},
            {id: 29, image: './Deck Assets/fronts/diamonds_3', value: 3, colour: 'red', suit: 'diamonds'},
            {id: 30, image: './Deck Assets/fronts/diamonds_4', value: 4, colour: 'red', suit: 'diamonds'},
            {id: 31, image: './Deck Assets/fronts/diamonds_5', value: 5, colour: 'red', suit: 'diamonds'},
            {id: 32, image: './Deck Assets/fronts/diamonds_6', value: 6, colour: 'red', suit: 'diamonds'},
            {id: 33, image: './Deck Assets/fronts/diamonds_7', value: 7, colour: 'red', suit: 'diamonds'},
            {id: 34, image: './Deck Assets/fronts/diamonds_8', value: 8, colour: 'red', suit: 'diamonds'},
            {id: 35, image: './Deck Assets/fronts/diamonds_9', value: 9, colour: 'red', suit: 'diamonds'},
            {id: 36, image: './Deck Assets/fronts/diamonds_10', value: 10, colour: 'red', suit: 'diamonds'},
            {id: 37, image: './Deck Assets/fronts/diamonds_jack', value: 10, colour: 'red', suit: 'diamonds'},
            {id: 38, image: './Deck Assets/fronts/diamonds_queen', value: 10, colour: 'red', suit: 'diamonds'},
            {id: 39, image: './Deck Assets/fronts/diamonds_king', value: 10, colour: 'red', suit: 'diamonds'},
            {id: 40, image: './Deck Assets/fronts/hearts_ace', value: 1, colour: 'red', suit: 'hearts'},
            {id: 41, image: './Deck Assets/fronts/hearts_2', value: 2, colour: 'red', suit: 'hearts'},
            {id: 42, image: './Deck Assets/fronts/hearts_3', value: 3, colour: 'red', suit: 'hearts'},
            {id: 43, image: './Deck Assets/fronts/hearts_4', value: 4, colour: 'red', suit: 'hearts'},
            {id: 44, image: './Deck Assets/fronts/hearts_5', value: 5, colour: 'red', suit: 'hearts'},
            {id: 45, image: './Deck Assets/fronts/hearts_6', value: 6, colour: 'red', suit: 'hearts'},
            {id: 46, image: './Deck Assets/fronts/hearts_7', value: 7, colour: 'red', suit: 'hearts'},
            {id: 47, image: './Deck Assets/fronts/hearts_8', value: 8, colour: 'red', suit: 'hearts'},
            {id: 48, image: './Deck Assets/fronts/hearts_9', value: 9, colour: 'red', suit: 'hearts'},
            {id: 49, image: './Deck Assets/fronts/hearts_10', value: 10, colour: 'red', suit: 'hearts'},
            {id: 50, image: './Deck Assets/fronts/hearts_jack', value: 10, colour: 'red', suit: 'hearts'},
            {id: 51, image: './Deck Assets/fronts/hearts_queen', value: 10, colour: 'red', suit: 'hearts'},
            {id: 52, image: './Deck Assets/fronts/hearts_king', value: 10, colour: 'red', suit: 'hearts'},
        ],
        hand: [],
        oppHand: [],
    },
    reducers: {
        startGame: (state) => {
            state.hand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
            state.oppHand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
            state.hand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
            state.oppHand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
        },
        drawCard: (state) => {
            state.hand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
        },
        drawOppCard: (state) => {
            state.oppHand.push(state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0])
        },
    }
})