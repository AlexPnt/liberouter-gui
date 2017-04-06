//import { dummyModule } from 'modules/dummy/dummy.module';
import { usersModule } from './modules/users/users.module';
import { nemeaModule } from './modules/nemea/nemea.module';
import { FtasModule } from './modules/ftas/ftas.module';
import { SecurityCloudModule } from './modules/security-cloud/sc.module';

export const modules : Array<Object> = [
	//		dummyModule,
	nemeaModule,
	FtasModule,
	SecurityCloudModule,
	usersModule
]
