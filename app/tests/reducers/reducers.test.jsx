var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText : 'test'
            }
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Something to do'
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo and flip uncompleted to completed value', () => {
            var todos = [{
                id: 1,
                text: 'Something',
                completed: false,
                createdAt: moment().unix(),
                completedAt: undefined
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(!todos[0].completed);
            expect(res[0].completedAt).toBeA('number');
        });

        it('should toggle todo and flip completed to uncompleted value', () => {
            var todos = [{
                id: 1,
                text: 'Something',
                completed: true,
                createdAt: moment().unix(),
                completedAt: moment().unix()
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(!todos[0].completed);
            expect(res[0].completedAt).toBe(undefined);
        });
    });
});
