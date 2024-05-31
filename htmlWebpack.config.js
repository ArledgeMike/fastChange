const titleCopy = 'Fast Change | You Need Change For That? | Topiary Wolf';
const descriptionCopy = 'I might be able to make change for that, lemme check.';

module.exports = {
    title: titleCopy,
    template: './src/index.html',
    filename: './index.html',
    meta: {
        'title': titleCopy,
        'viewport': {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        },
        'favicon': 'images/favicon.png',
        'description': {
            name: 'description',    
            content: descriptionCopy 
        },
        'og:title': {
            property: 'og:title',    
            content: titleCopy
        },
        'og:description': {
            property: 'og:description',    
            content: descriptionCopy
        },
        'og:type': {
            property: 'og:type',    
            content: 'website'
        },
        'og:url': {
            property: 'og:url',    
            content: 'http://topiarywolf.com/fastchange'
        },
        'og:image': {
            property: 'og:image',    
            content: 'images/headerImage.png'
        }
    }
};