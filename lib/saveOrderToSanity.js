import { client } from "@/sanity/lib/client"

export async function saveOrder(data) {
  return client.create({
    _type: 'ecommerceOrders',
    ...data
  })
}
