# String Utils
Collection of alot of string ultilities which I use all the time.

## noAccentNoCase (string)

Return a new string without special characters and with lower case

### Example

```javascript
console.log(noAccentNoCase('Capitão'))
>> Should return 'capitao'
```

## includeAll (target, term)

Return true if *target* contains all words in *term*

```javascript
console.log('Edgar Muniz Berlinck', 'Berlinck')
>> Should return *true*
console.log('Edgar Muniz Berlinck', 'Muniz Berlinck')
>> Should return *true*
console.log('Edgar Muniz Berlinck', 'Edgar Berlinck')
>> Should return *true*
console.log('Edgar Muniz Berlinck', 'Gostosão Berlinck')
>> Should return *false*
```

