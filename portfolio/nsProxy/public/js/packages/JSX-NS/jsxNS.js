/*
React Namespace
    This Package allows enables JSX Namespaces to be used with React and with JSX compilers 
    
    Details:
        the React.createElement and React.createFragment functions are proxied and the arguments 
            are then checked for namespace JSX declarations ( ex: <G:log>hello world</G:log> ) 
            and attributes ( ex: <p x:extend={object}>hello world</p> )

        Namespaces are registered by the user and if they are unspecified the arguments just get 
            passed into React.createElement

        Namespace JSX declarations and Namespace JSX Attributes are handled in a separate manner
        
        Namespace JSX declarations determine what function/class/object is being created by the 
            proxy and where to find it. This is because JSX transpiles namespaced elements as a
            string. The string is parsed and used to access the desired namespace and its content

        Namespace JSX Attributes are used to modify the behaviour of the proxy itself.
            

        Included Namespaces for JSX Declarations:
            No-Namespace: React.createElement is the payload
            g: global -> uses the declaration as a key to access globalThis and uses the value as the payload
            r: react -> if react exists in the global scope, this represents the React namespace
            rd: reactDOM -> if ReactDOM exists in the global scope, this represents the ReactDOM namespace

        Included Namespaces for JSX Attributes:
            No-Namespace  ----  default -> all attributes are props key/value pairs

            f  ---------------  format  --  changes the way the proxy applies the props or children before applying them to the payload
                f:shiftArg              ::  any         ->
                f:pushArg               ::  any         ->
                f:splitProps            ::  bool        -> 
                f:joinChildren          ::  bool        ->  
                f:pushChildren          ::  array       ->
                f:shiftChildren         ::  array       ->
                f:pushChild             ::  any         ->
                f:shiftChild            ::  any         ->
                f:propsFromLast         ::  number      ->
                f:propsFromFirst        ::  number      ->
                f:childrenFromLast      ::  number      ->
                f:childrenFromFirst     ::  number      ->


            m  ---------------  map  --  map over the props/children with a given function before applying them the payload
                m:keys                  ::  function    ->  Function maps over keys and returns an object with the new keys and old values
                m:values                ::  function    ->  Function maps over values and returns an object with the old keys and new values
                m:children              ::  function    ->  Function maps over children and returns new children array
                m:filterByKey           ::  function    ->  Function filters keys and returns an object with the remaining key/value pairs
                m:filterByValue         ::  function    ->  Function filters values and returns an object with the remaining key/value pairs
                m:filterChilren         ::  function    ->  Function filters children and returns new children array

            x  ---------------  behaviour --  changes the way the proxy encapsulates and delivers the payload
                x:enclose               ::  bool        ->  return a function returning the payload
                x:callBefore            ::  bool        ->  Invokes the payload before applying and returns the result
                x:callAfter             ::  bool        ->  Invokes the payload after applying and returns the result
                x:new                   ::  bool        ->  returns Reflect.Apply to construct the payload using new
                x:noCall                ::  bool        ->  returns an object with the payload, declaration, props, and children as properties
                x:decorate              ::  function    ->  Invokes the function with the payload as the argument and returns the result
                x:runBefore             ::  function    ->  Invokes the function before the proxy processes the payload
                x:runAfter              ::  function    ->  Invokes the function after the proxy processes the payload
                x:staticBefore          ::  string      ->  Invokes the property of the payload before the proxy processes the payload 
                x:staticAfter           ::  string      ->  Invokes the property of the payload after the proxy processes the payload 
                x:onError               ::  function    ->
                x:onSuccess             ::  function    ->
                
Proxy:

    local proxy:


    
    global proxy:
    


Namespaces:

    JSXElement:



    JSXAttribute:



    
Register Namespaces:





*/


/*  Register Namespaces  */

function namespaceExists(){}
function checkForNamespace(){}
function registerReact(){}
function registerReactDOM(){}
function registerNamespace(namespace, nsItemDictionary){}
function registerAttrNamespace(){}


/*  Check if React and ReactDOM exist  */

function reactChecker() {
    if(globalThis.React) {
        registerReact()
    } else { 
        globalThis.React = {
            createElement:  ()      => console.log('React does not exist within the global scope'),
            Fragment:       (...x)  => x
        }
    }
}





const reactNS = React.createElement


/**
 * handleApply  ::  (function, object, array) => (function() || namespacedFunction())
 * 
 * @param {function} target 
 * @param {proxied object this} object 
 * @param {array of arguments} argList 
 * 
 * 
 * function is used to catch all invokations of React.createElement 
 *      arguments are processed and checked for the namespace delimiter :
 *      
 * if the declaration is a string containing : it is 
 *      determined to be namespaced and React.createElement is swapped out
 *      for a namespaced object/function/class that corresponds to the 
 *      namespace declared
 * 
 * if the props contain a key denoted by a string containing a : it
 *      is determined to be namespaced and the arguments and proxy 
 *      behaviour are altered as specified     
 */
const handleApply = (target, object, argList) => {

    // if the props object is null, send to React.createElement
    if(!argList[1]){
        return target.apply(null, argList)
    } else {
        Object.keys(argList[1]).map((z) => {
            if (z.includes(':')) {
                console.log('this is also namespaced', z)
            }
        })
    }
    
    // if the declaration wasn't a string, immediately send to React.createElement
    if(typeof argList[0] != 'string') {
        return target.apply(null, argList)
    }

    // if the declaration string does not have a colon, it is not namespaced
    //      it is an html element and is sent to React.createElement
    if(!argList[0].includes(':')) {
        return target.apply(null, argList)
    } else {
        console.log("this is namespaced", argList[0])
    }

    return target.apply(null, argList)
}


const nsHandler = {
    apply: handleApply
} 






const NS = {
    createProxy: () => new Proxy(React.createElement, nsHandler),
    registerNamespace: registerNamespace,
    registerAttrNamespace: registerAttrNamespace
}

React.createElement = NS.createProxy()

export { NS }