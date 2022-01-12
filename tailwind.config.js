module.exports = 
{
    content: ["./*.html"],

    theme: 
    {
        fontSize: 
        {
            'xxxs':     '.55rem',
            'xxs':      '.65rem',
            'xs':       '.75rem',      
            'sm':       '.875rem',      
            'tiny':     '.875rem',      
            'base':     '1rem',      
            'lg':       '1.125rem',      
            'xl':       '1.25rem',      
            '2xl':      '1.5rem',      
            '3xl':      '1.875rem',      
            '4xl':      '2.25rem',      
            '5xl':      '3rem',      
            '6xl':      '4rem',      
            '7xl':      '5rem',
        },

        screen: 
        {
            'xs':   { 'min': '225px', 'max': '639px' },
            'sm':   { 'min': '640px', 'max': '767px' },
            'md':   { 'min': '768px', 'max': '1023px' },
            'lg':   { 'min': '1024px', 'max': '1279px' },
            'xl':   { 'min': '1280px', 'max': '1535px' },
            '2xl':  { 'min': '1536px' },
        },
        
        extend: 
        {
            colors:
            {
                'primary': "#1d2124",
                'secondary': "#363738",
                'third': "#fdb82b",
            },

            fontFamily: 
            {
                'primary': ['Oxygen'],
            },

            backgroundImage:
            {

            },
        }
    },

    plugins: [],
}
