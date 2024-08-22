import { CollectionBeforeChangeHook } from 'payload/types'
import { useCollapsible } from 'payload/components/utilities'
export const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
//const { collapsed, toggle } = useCollapsible()
console.log(useCollapsible())
console.log(data)
console.log(req.body)
console.log(originalDoc)
console.log(operation)
//console.log(collapsed)
  return  // Return data to either create or update a document with
}
