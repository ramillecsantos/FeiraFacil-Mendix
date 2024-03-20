// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package documentgeneration.proxies.microflows;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public final class Microflows
{
	/**
	 * Private constructor to prevent instantiation of this class. 
	 */
	private Microflows() {}

	// These are the microflows for the DocumentGeneration module
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder aCT_Registration_RenewBuilder()
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.ACT_Registration_Renew");
		return builder;
	}

	public static void aCT_Registration_Renew(IContext context)
	{
		aCT_Registration_RenewBuilder().execute(context);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder aCT_Registration_RevokeBuilder(
		documentgeneration.proxies.Configuration _configuration
	)
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.ACT_Registration_Revoke");
		builder = builder.withParam("Configuration", _configuration);
		return builder;
	}

	public static void aCT_Registration_Revoke(
		IContext context,
		documentgeneration.proxies.Configuration _configuration
	)
	{
		aCT_Registration_RevokeBuilder(
				_configuration
			)
			.execute(context);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder aCT_Registration_StartBuilder(
		documentgeneration.proxies.Configuration _configuration,
		documentgeneration.proxies.RegistrationWizard _registrationWizard
	)
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.ACT_Registration_Start");
		builder = builder.withParam("Configuration", _configuration);
		builder = builder.withParam("RegistrationWizard", _registrationWizard);
		return builder;
	}

	public static void aCT_Registration_Start(
		IContext context,
		documentgeneration.proxies.Configuration _configuration,
		documentgeneration.proxies.RegistrationWizard _registrationWizard
	)
	{
		aCT_Registration_StartBuilder(
				_configuration,
				_registrationWizard
			)
			.execute(context);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder aSu_DocumentGeneration_InitializeBuilder()
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.ASu_DocumentGeneration_Initialize");
		return builder;
	}

	public static boolean aSu_DocumentGeneration_Initialize(IContext context)
	{
		Object result = aSu_DocumentGeneration_InitializeBuilder().execute(context);
		return (boolean) result;
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder dS_Configuration_FindOrCreateBuilder()
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.DS_Configuration_FindOrCreate");
		return builder;
	}

	public static documentgeneration.proxies.Configuration dS_Configuration_FindOrCreate(IContext context)
	{
		Object result = dS_Configuration_FindOrCreateBuilder().execute(context);
		return result == null ? null : documentgeneration.proxies.Configuration.initialize(context, (IMendixObject) result);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder dS_RegistrationWizard_FindOrCreateBuilder(
		documentgeneration.proxies.Configuration _configuration
	)
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.DS_RegistrationWizard_FindOrCreate");
		builder = builder.withParam("Configuration", _configuration);
		return builder;
	}

	public static documentgeneration.proxies.RegistrationWizard dS_RegistrationWizard_FindOrCreate(
		IContext context,
		documentgeneration.proxies.Configuration _configuration
	)
	{
		Object result = dS_RegistrationWizard_FindOrCreateBuilder(
				_configuration
			)
			.execute(context);
		return result == null ? null : documentgeneration.proxies.RegistrationWizard.initialize(context, (IMendixObject) result);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder sE_AccessToken_RefreshBuilder()
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.SE_AccessToken_Refresh");
		return builder;
	}

	public static boolean sE_AccessToken_Refresh(IContext context)
	{
		Object result = sE_AccessToken_RefreshBuilder().execute(context);
		return (boolean) result;
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder sE_DocumentRequest_CleanupBuilder()
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.SE_DocumentRequest_Cleanup");
		return builder;
	}

	public static void sE_DocumentRequest_Cleanup(IContext context)
	{
		sE_DocumentRequest_CleanupBuilder().execute(context);
	}
	public static com.mendix.core.actionmanagement.MicroflowCallBuilder vAL_Registration_InputBuilder(
		documentgeneration.proxies.RegistrationWizard _registrationWizard
	)
	{
		com.mendix.core.actionmanagement.MicroflowCallBuilder builder = Core.microflowCall("DocumentGeneration.VAL_Registration_Input");
		builder = builder.withParam("RegistrationWizard", _registrationWizard);
		return builder;
	}

	public static boolean vAL_Registration_Input(
		IContext context,
		documentgeneration.proxies.RegistrationWizard _registrationWizard
	)
	{
		Object result = vAL_Registration_InputBuilder(
				_registrationWizard
			)
			.execute(context);
		return (boolean) result;
	}
}