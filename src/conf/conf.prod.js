const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
  appwriteDbId: String(import.meta.env.VITE_APPWRITE_DBID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKETID),
  TinyMCE_API_KEY: String(import.meta.env.TinyMCE_API_KEY),
};

export default conf;
