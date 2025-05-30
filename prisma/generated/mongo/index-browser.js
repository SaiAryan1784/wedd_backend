
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  business_name: 'business_name',
  business_category: 'business_category',
  license_number: 'license_number',
  service_type: 'service_type',
  description: 'description',
  logo_url: 'logo_url',
  country: 'country',
  latitude: 'latitude',
  longitude: 'longitude',
  city: 'city',
  email: 'email',
  state: 'state',
  password_hash: 'password_hash',
  phone_number: 'phone_number',
  profileViews: 'profileViews',
  social_networks: 'social_networks',
  faqs: 'faqs',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_verified: 'is_verified',
  refresh_Token: 'refresh_Token',
  resetPassword_Token: 'resetPassword_Token',
  role: 'role'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  service_name: 'service_name',
  description: 'description',
  min_price: 'min_price',
  max_price: 'max_price',
  city: 'city',
  state: 'state',
  price: 'price',
  service_type: 'service_type',
  service_category: 'service_category',
  service_unit: 'service_unit',
  status: 'status',
  rating: 'rating',
  faqs: 'faqs',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ViewsScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  userId: 'userId',
  viewCount: 'viewCount',
  lead: 'lead',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  serviceId: 'serviceId',
  comment: 'comment',
  rating: 'rating',
  user_name: 'user_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AvailabilityScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  available_date: 'available_date',
  wedding_date: 'wedding_date',
  is_available: 'is_available',
  created_at: 'created_at'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  image_urls: 'image_urls',
  video_urls: 'video_urls',
  uploaded_at: 'uploaded_at'
};

exports.Prisma.EditorAssetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  uploadedBy: 'uploadedBy',
  type: 'type',
  public_id: 'public_id',
  url: 'url',
  preview_url: 'preview_url',
  tags: 'tags',
  asset_folder: 'asset_folder',
  etag: 'etag',
  createdAt: 'createdAt',
  name: 'name'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  name: 'name',
  position: 'position',
  bio: 'bio',
  email: 'email',
  photo_url: 'photo_url',
  social_links: 'social_links',
  created_at: 'created_at'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  promotion_title: 'promotion_title',
  description: 'description',
  discount_percentage: 'discount_percentage',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at'
};

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  duration: 'duration',
  description: 'description',
  features: 'features',
  trial_period: 'trial_period',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  planId: 'planId',
  status: 'status',
  order_id: 'order_id',
  payment_id: 'payment_id',
  start_date: 'start_date',
  end_date: 'end_date',
  auto_renew: 'auto_renew',
  is_trial: 'is_trial',
  trial_end_date: 'trial_end_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  subscriptionId: 'subscriptionId',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  payment_method: 'payment_method',
  razorpay_order_id: 'razorpay_order_id',
  razorpay_payment_id: 'razorpay_payment_id',
  refund_id: 'refund_id',
  is_refunded: 'is_refunded',
  failure_reason: 'failure_reason',
  vpa: 'vpa',
  fee: 'fee',
  tax: 'tax',
  rrn: 'rrn',
  upi_transaction_id: 'upi_transaction_id',
  email: 'email',
  contact: 'contact',
  acquirer_data: 'acquirer_data',
  notes: 'notes',
  autoRenew: 'autoRenew',
  created_at: 'created_at',
  updated_at: 'updated_at',
  bill_generated: 'bill_generated'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  invoiceNumber: 'invoiceNumber',
  vendorId: 'vendorId',
  paymentId: 'paymentId',
  nextBillingDate: 'nextBillingDate',
  discount: 'discount',
  totalExclIGST: 'totalExclIGST',
  igstAmount: 'igstAmount',
  igstTotal: 'igstTotal',
  totalAmount: 'totalAmount',
  amountDue: 'amountDue',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CounterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  value: 'value'
};

exports.Prisma.InvitationTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  userId: 'userId',
  jsonData: 'jsonData',
  price: 'price',
  categoryByAmount: 'categoryByAmount',
  categoryByMood: 'categoryByMood',
  categoryByRequirement: 'categoryByRequirement',
  additionalTags: 'additionalTags',
  designedBy: 'designedBy',
  thumbnailUrl: 'thumbnailUrl',
  rating: 'rating',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateWatchHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  templateId: 'templateId',
  watchedAt: 'watchedAt'
};

exports.Prisma.UserDataTemplateScalarFieldEnum = {
  userId: 'userId',
  template_id: 'template_id',
  eventHeading: 'eventHeading',
  eventSubheading: 'eventSubheading',
  brideName: 'brideName',
  groomName: 'groomName',
  eventDate: 'eventDate',
  weddingTime: 'weddingTime',
  weddingLocation: 'weddingLocation',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentDetailsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  paymentId: 'paymentId',
  razorpayResponse: 'razorpayResponse',
  orderStatus: 'orderStatus',
  paymentStatus: 'paymentStatus',
  amount: 'amount',
  currency: 'currency',
  purchasedAt: 'purchasedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  templateId: 'templateId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.CategoryByAmount = exports.$Enums.CategoryByAmount = {
  FREE: 'FREE',
  PAID: 'PAID'
};

exports.CategoryByMood = exports.$Enums.CategoryByMood = {
  BIRTHDAY: 'BIRTHDAY',
  ROMANCE: 'ROMANCE',
  WEDDING: 'WEDDING',
  ANNIVERSARY: 'ANNIVERSARY',
  CORPORATE: 'CORPORATE',
  LOVE: 'LOVE',
  COUPLE: 'COUPLE'
};

exports.CategoryByRequirement = exports.$Enums.CategoryByRequirement = {
  HOT: 'HOT',
  POPULAR: 'POPULAR',
  LATEST: 'LATEST'
};

exports.TemplateStatus = exports.$Enums.TemplateStatus = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

exports.Prisma.ModelName = {
  Vendor: 'Vendor',
  Service: 'Service',
  Views: 'Views',
  Feedback: 'Feedback',
  Availability: 'Availability',
  Media: 'Media',
  EditorAsset: 'EditorAsset',
  TeamMember: 'TeamMember',
  Promotion: 'Promotion',
  Plan: 'Plan',
  Subscription: 'Subscription',
  Payment: 'Payment',
  Invoice: 'Invoice',
  Counter: 'Counter',
  InvitationTemplate: 'InvitationTemplate',
  TemplateWatchHistory: 'TemplateWatchHistory',
  UserDataTemplate: 'UserDataTemplate',
  PaymentDetails: 'PaymentDetails'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
