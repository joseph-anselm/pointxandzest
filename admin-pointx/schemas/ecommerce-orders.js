export default {
  name: 'ecommerceOrders',
  title: 'Ecommerce Orders',
  type: 'document',
  fields: [
    { name: 'email', type: 'string', title: 'Customer Email' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'bundle', type: 'string', title: 'Selected Bundle' },
    { name: 'amount', type: 'number', title: 'Amount Paid' },
    { name: 'reference', type: 'string', title: 'Payment Reference' }
  ]
}
