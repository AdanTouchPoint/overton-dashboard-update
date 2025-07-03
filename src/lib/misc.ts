export function validatestring(repo) {
    return repo.toLowerCase().replace(/ /g, '_');
  }
  export const checker = ( questions,keywords ) => {
    for (let key in questions) {
         if (questions.hasOwnProperty(key)) {
           let value = questions[key];
           for (let i = 0; i < keywords.length; i++) {
             if (value.includes(keywords[i])) {
               value = value.replace(new RegExp(keywords[i], "gi"), "abcd");
             }
           }
           questions[key] = value;
         }
       }
       return questions
 }
 export function formSelector(formType: string) {
  if (typeof formType !== 'string') {
    return undefined; // o un valor por defecto
  }
  switch (formType.toLowerCase()) {
    case "sb":
      return "SB";
    case "pd":
      return "PD";
    case "ap":
      return "AP";
  }
}