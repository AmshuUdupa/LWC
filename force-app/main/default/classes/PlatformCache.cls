
public inherited sharing class PlatformCache {
    
    private static final String DEFAULTPARTITION = 'dse';
    private enum PartitionTypes {SESSION , ORG}

    public class CacheException extends Exception {

    }
    // Methods for Session cache
    //max TTL for org cache is 48 hours
    public static void storeValueInSessionCache(String key, String toStore){
        PlatformCache.storeValueInSessionCache(key, toStore,3600);
    }

    public static void storeValueInSessionCache(String key, String toStore, Integer ttl){
        getDefaultPartition(PartitionTypes.SESSION).put(key, toStore,ttl);
    }

    public static String getValueFromSessionCache(String key){
        Cache.Partition defPartition = getDefaultPartition(PartitionTypes.SESSION);
        if (defPartition.contains(key)){
            return (String) defPartition.get(key);
        }
        return 'cache miss';
        
       
    }

    public static void removeKeyFromSessionCache(String key){
        Cache.Partition defPartition = getDefaultPartition(PartitionTypes.SESSION);
        if(defPartition.contains(key)){
            defPartition.remove(key);
            }
        else{throw new CacheException('key not found');} 
       
    }

    // Methods for ORG Cach
    //max TTL for org cache is 48 hours

    public static void storeValueInOrgCache(String key, String toStore){
        PlatformCache.storeValueInOrgCache(key, toStore,3600);
    }

    public static void storeValueInOrgCache(String key, String toStore, Integer ttl){
        getDefaultPartition(PartitionTypes.ORG).put(key, toStore,ttl);
    }

    public static String getValueFromOrgCache(String key){
        Cache.Partition defPartition = getDefaultPartition(PartitionTypes.ORG);
        if (defPartition.contains(key)){
            return (String) defPartition.get(key);
        } 

        return 'cache miss';
        
       
    }

    public static void removeKeyFromOrgCache(String key){
        Cache.Partition defPartition = getDefaultPartition(PartitionTypes.SESSION);
        if(defPartition.contains(key)){
            defPartition.remove(key);
            }
        else{throw new CacheException('key not found');} 
       
    }


    private static Cache.Partition getDefaultPartition(PartitionTypes type){
        switch on type {
            when SESSION {
                return  (Cache.Partition) Cache.Session.getPartition(DEFAULTPARTITION);
                
                }
        }
        return (Cache.Partition) Cache.ORG.getPartition(DEFAULTPARTITION);
    }

}
