// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package documentgeneration.proxies.constants;

import com.mendix.core.Core;

public final class Constants
{
	/**
	 * Private constructor to prevent instantiation of this class. 
	 */
	private Constants() {}

	// These are the constants for the DocumentGeneration module

	/**
	* Timeout in seconds for an asynchronous request; determines how long a document is allowed to be queued by the Cloud service
	*/
	public static java.lang.Long getAsyncTimeoutInSeconds()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("DocumentGeneration.AsyncTimeoutInSeconds");
	}

	public static java.lang.String getCloudEndpoint()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("DocumentGeneration.CloudEndpoint");
	}

	/**
	* Path to Chrome or Chromium executable, for example: C:/Program Files/Google/Chrome/Application/Chrome.exe
	*/
	public static java.lang.String getCustomChromePath()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("DocumentGeneration.CustomChromePath");
	}

	/**
	* Path to Node.js executable, for example: C:/Program Files/nodejs/node.exe
	*/
	public static java.lang.String getCustomNodePath()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("DocumentGeneration.CustomNodePath");
	}

	/**
	* The number of hours to determine if the access token that is used to secure the Document Generation Cloud service should be refreshed.
	*/
	public static java.lang.Long getMaxHoursBeforeTokenRefresh()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("DocumentGeneration.MaxHoursBeforeTokenRefresh");
	}

	/**
	* Overrides the service type to use. The applicable values are: Local, Cloud or empty (default). When empty, the module will determine the service type based on the operating system.
	*/
	public static java.lang.String getOverrideServiceType()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("DocumentGeneration.OverrideServiceType");
	}

	/**
	* The offset in days after which expired DocumentRequest objects are deleted if the 'SE_DocumentRequest_Cleanup' scheduled event has been enabled.
	* 
	* Default: 7 days.
	*/
	public static java.lang.Long getRequestCleanupOffsetInDays()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("DocumentGeneration.RequestCleanupOffsetInDays");
	}

	/**
	* Timeout in seconds for a synchronous request to wait for the result
	*/
	public static java.lang.Long getSyncTimeoutInSeconds()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("DocumentGeneration.SyncTimeoutInSeconds");
	}

	/**
	* Security token lifetime in seconds. The security token is used to secure and validate document requests from the local and/or cloud service.
	* 
	* Default value: 1800 (30 minutes)
	*/
	public static java.lang.Long getTokenLifetimeInSeconds()
	{
		return (java.lang.Long)Core.getConfiguration().getConstantValue("DocumentGeneration.TokenLifetimeInSeconds");
	}

	/**
	* This is the version of the Document Generation module.
	*/
	public static java.lang.String getVersion()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("DocumentGeneration.Version");
	}
}